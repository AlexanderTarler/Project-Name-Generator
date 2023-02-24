"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const adjectives = fs_1.default
    .readFileSync(path_1.default.join(__dirname.replace('build', 'data'), '/adjectives.txt'), 'utf-8')
    .split('\n');
const nouns = fs_1.default
    .readFileSync(path_1.default.join(__dirname.replace('build', 'data'), '/nouns.txt'), 'utf-8')
    .split('\n');
const randomIndex = (length) => Math.floor(Math.random() * length);
function getName(req, res) {
    const adjective = adjectives[randomIndex(adjectives.length)];
    const noun = nouns[randomIndex(nouns.length)];
    const result = `${adjective} ${noun}`;
    res.status(200).json({ result });
}
exports.getName = getName;
