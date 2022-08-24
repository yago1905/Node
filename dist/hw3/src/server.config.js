"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_CONFIG = void 0;
const os_1 = __importDefault(require("os"));
// @ts-ignore
const ip = os_1.default.networkInterfaces().Ethernet[1].address;
exports.SERVER_CONFIG = {
    PORT: 4000,
    DESCRIPTION: `<<Server Start>> ${new Date()} http://localhost:4000/ OR  http://${ip}:4000`,
};
