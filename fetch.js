const issuer = process.env.ISSUER
const jwksUri = `${issuer}/.well-known/jwks.json`

console.log("Fetching JWKS from", jwksUri)

try {
    await fetch(jwksUri)
    console.log("Successfully fetched JWKS")
} catch {
    console.log("Failed to fetch JWKS")
}