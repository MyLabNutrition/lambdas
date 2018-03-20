#Send Email Lambda
## Dependencies
* `@sendgrid/mail`

## Description
This lambda wraps the Sendgrid NodeJS APIs for making a simple request from our application. This was needed because of problems with the SendGrid's Java API wich seems to have problems with substitutions and templates
