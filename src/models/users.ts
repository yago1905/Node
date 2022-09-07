import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import bcrypt from 'bcrypt';

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastname: {
    type: String,
    required: true,
  },
});

UsersSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

export const Users = model('Users', UsersSchema, 'users');
