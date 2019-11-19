"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, DB_USER = _a.DB_USER, DB_PASSWORD = _a.DB_PASSWORD, DB_HOST = _a.DB_HOST;
var DB_URI = "mongodb+srv://" + DB_USER + ":" + DB_PASSWORD + "@" + DB_HOST + "/test?retryWrites=true&w=majority";
mongoose_1.default.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.connection.once('open', function () { return console.log('Connected to a MongoDB instance'); });
mongoose_1.default.connection.on('error', function (error) { return console.error(error); });
exports.default = mongoose_1.default;
//# sourceMappingURL=database.js.map