import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { CheckUser } from '../models/checkUser';
import { Token } from '../models/tokens';
import { loggerAuth } from '../logs/logs.config';

export const authRoute = express.Router();

authRoute.post('/signup', async (req, res) => {
  try {
    loggerAuth.info(`Creating a user; body: ${JSON.stringify(req.body)}`);
    const check = await CheckUser.findOne({ email: req.body.email });
    loggerAuth.info(`Checking for the existence of a user`);
    if (!check) {
      loggerAuth.info(`Verification passed`);
      const { _id, email, firstName, lastname, age } = await CheckUser.create(
        req.body
      );
      loggerAuth.info(
        `User created; body: ${JSON.stringify({
          _id,
          email,
          firstName,
          lastname,
          age,
        })}`
      );
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(201).json({ _id, email, firstName, lastname, age });
    } else {
      loggerAuth.warn(`Verification NO passed`);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res
        .status(200)
        .send({ result: false, errorMassage: 'Логин не подходит' });
    }
  } catch (error) {
    loggerAuth.error(`ERROR ${error}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error });
  }
});

authRoute.post('/signin', async (req, res) => {
  loggerAuth.info(`User authorization`);
  const email = req.body.email;
  const password = req.body.password;

  const user = await CheckUser.findOne({ email });
  if (!user) {
    loggerAuth.warn(`User not found`);
    res.status(400).json({ massage: 'User or password is wrong' });
    return;
  }

  //TODO
  // @ts-ignore
  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    loggerAuth.warn(`User or password is wrong`);
    res.status(400).json({ massage: 'User or password is wrong' });
    return;
  }
  const data = {
    id: user?._id,
    email: user?.email,
  };
  loggerAuth.info(`Start create tokens`);
  const accessToken = jwt.sign(data, String(process.env.JWT_SECRET_KEY), {
    expiresIn: '2h',
  });
  const refreshToken = jwt.sign(
    data,
    String(process.env.JWT_REFRESH_SECRET_KEY),
    { expiresIn: '1d' }
  );

  await Token.findOne({ email: user?.email }).update({ expiresIn: false });
  await Token.create(
    { token: refreshToken, email: user?.email, expiresIn: true },
    (err, data) => {
      if (err) {
        loggerAuth.error(`Token has not been created`);
        res
          .status(500)
          .json({ error: true, message: 'Token has not been created' });
      }
      loggerAuth.info(`Create tokens success`);
      //res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json({ accessToken, refreshToken });
    }
  );
});

authRoute.post('/token', async (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken) {
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET_KEY as string,
      (err: any, decoded: any) => {
        if (err) {
          res
            .status(401)
            .json({ error: true, massage: 'Token is not verified' });
          return;
        } else {
          Token.findOne({ token: refreshToken, expiresIn: true }).update({
            expiresIn: false,
          });
          const decode = jwt.decode(refreshToken);
          //@ts-ignore
          const accessToken = jwt.sign(
            { id: decode?.id, email: decode?.email },
            process.env.JWT_SECRET_KEY as string,
            { expiresIn: '2h' }
          );
          res.status(200).json({ accessToken });
        }
      }
    );
  } else {
    res.status(401).json({ error: true, massage: 'Token is not verified' });
  }
});
