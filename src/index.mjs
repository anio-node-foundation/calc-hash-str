import crypto from "node:crypto"

export default function(str, algo = "sha1") {
	return new Promise((resolve) => {
		const hash = crypto.createHash(algo)

		hash.update(str)

		resolve(hash.digest("hex"))
	})
}
