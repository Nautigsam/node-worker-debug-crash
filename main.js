import {Worker} from "node:worker_threads";

const worker = new Worker("./worker.js");

await new Promise(resolve => worker.once("exit", () => resolve()));