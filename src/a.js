import { b } from "./b";
import { join } from "path";

console.log(b); // "defined by a"
console.log(join); // "overridden by b"
