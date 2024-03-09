import calcHashStr from "./src/index.mjs"

console.log(await calcHashStr("hello, world", "sha1"))
console.log(await calcHashStr("hello, world", "md5"))
