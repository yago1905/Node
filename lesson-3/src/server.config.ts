import os from 'os';

// @ts-ignore
const ip = os.networkInterfaces().Ethernet[1].address;
export const SERVER_CONFIG = {
  PORT: 4000,
  DESCRIPTION: `<<Server Start>> ${new Date()} http://localhost:4000/ OR  http://${ip}:4000`,
};
