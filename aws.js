import { JwtVerifier } from "aws-jwt-verify";

const issuer = process.env.ISSUER
const jwksUri = `${issuer}/.well-known/jwks.json`

console.log("Using JWKS from", jwksUri)

const verifier = JwtVerifier.create({
    issuer,
    audience: "Cognito", // set this to the expected "aud" claim on your JWTs
    jwksUri
  });
  

try {
    const payload = await verifier.verify("eyJraWQeyJhdF9oYXNoIjoidk");
    console.log("Token is valid. Payload:", payload);
} catch {
    console.log("Token not valid!");
}