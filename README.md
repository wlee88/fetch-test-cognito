## AWS Cognito fetch test code

- purely for testing you can access a JWK file from cognito.
- we found we couldn't access cognito's jwk file from eu-west-2 to us-west-2. The only thing that changed was fetch so a POC was in order.

## Conclusion

- fetch/node are very interlinked and fetch times out after 250ms. Curl requests from running an interactive terminal took just over 250ms. Upping the timeout fixed auth
