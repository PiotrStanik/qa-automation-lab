# QA Automation Lab

A practical QA portfolio project combining manual testing, browser automation, API testing, and CI workflows.

The project uses the public OrangeHRM demo application as a test environment.

## Current scope

### UI testing with Playwright

Automated scenarios currently cover:

- login page availability
- invalid login credentials
- required field validation
- successful login
- successful logout
- protection of authenticated pages after logout

Tests are executed across Chromium, Firefox, and WebKit.

### API testing

API tests currently cover the OrangeHRM dashboard shortcuts endpoint.

Scenarios include:

- unauthenticated request returns `401 Unauthorized`
- authenticated request returns `200 OK`
- validation of JSON response data
- validation of response headers
- basic response contract checks

### API investigation and verification

The authentication flow was verified using:

- Chrome DevTools Network panel
- Postman
- Playwright APIRequestContext

The testing included:

- HTTP methods
- status codes
- redirects
- session cookies
- CSRF token handling
- authenticated and unauthenticated API behavior
- JSON response verification

### Postman

Manual API tests were reproduced in Postman, including JavaScript assertions for:

- expected HTTP status
- JSON content type
- expected response fields and values

## Tools

- Playwright
- TypeScript
- Node.js
- npm
- Postman
- Chrome DevTools
- Git
- GitHub
- GitHub Actions

## CI

GitHub Actions automatically runs the Playwright test suite on pull requests.

This provides an additional verification step before changes are merged into the main branch.

## Test environment

Application under test:

OrangeHRM Open Source Demo

The project is intended for learning and portfolio purposes and uses only public demonstration credentials and public test data.

## Repository workflow

Development follows a basic Git workflow:

1. Create a feature branch
2. Implement or update tests
3. Run tests locally
4. Commit and push changes
5. Open a pull request
6. Run automated CI checks
7. Merge after successful verification

## Next steps

Planned improvements include:

- additional API scenarios
- reusable authentication setup
- test data parameterization
- negative and edge-case testing
- improved test organization
- additional regression coverage