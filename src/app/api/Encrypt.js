const { createHash } = require("crypto");

export default function Encrypt(string) {
  return createHash("sha256").update(string).digest("hex");
}
