import { sha512 } from "js-sha512"

const pw = prompt("What's the password? ")
if (pw) console.log(sha512(pw))
