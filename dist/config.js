"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
exports.APP_PROTOCOL = process.env.APP_PROTOCOL;
exports.APP_HOST = process.env.APP_HOST;
exports.APP_PORT = Number(process.env.APP_PORT);
exports.RESOURCE_PROTOCOL = process.env.RESOURCE_PROTOCOL;
exports.RESOURCE_HOST = process.env.RESOURCE_HOST;
