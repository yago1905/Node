import log4js from 'log4js';

log4js.configure({
  appenders: {
    chat: {
      type: 'file',
      filename: 'src/logs/request_chat.log',
      compress: true,
    },
    chats: {
      type: 'file',
      filename: 'src/logs/request_chats.log',
      compress: true,
    },
    users: {
      type: 'file',
      filename: 'src/logs/request_users.log',
      compress: true,
    },
    system: {
      type: 'file',
      filename: 'src/logs/request_system.log',
      compress: true,
    },
    auth: { type: 'file', filename: 'src/logs/auth.log', compress: true },
  },
  categories: {
    default: { appenders: ['system'], level: 'info' },
    chat: { appenders: ['chat'], level: 'info' },
    chats: { appenders: ['chats'], level: 'info' },
    users: { appenders: ['users'], level: 'info' },
    auth: { appenders: ['auth'], level: 'info' },
  },
});

export const loggerReqResChat = log4js.getLogger('chat');
export const loggerReqResChats = log4js.getLogger('chats');
export const loggerReqResSystem = log4js.getLogger('system');
export const loggerAuth = log4js.getLogger('auth');
