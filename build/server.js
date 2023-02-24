"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const names_1 = require("./names");
const app = (0, express_1.default)();
const PORT = 4000;
// app.get is a request to the server that gives a response
// in this case, as long as the client is on "localhost:4000/",
// they get greeted with the index.html-file
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/name', names_1.getName);
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));
