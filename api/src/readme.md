# Get up and running

## Pre-requisites

1. Install MongoDB
2. Open up package.json file
2. Run API in development mode `yarn dev` or `npm run dev`


A superadmin will be created with the credentials admin/password.

## Run the server

1. To run the app not in development `yarn start`. If that raises an issue, run `yarn build`, then `yarn start`


# Tests

Nothing under test for now

## Linter tests

This project uses StandardJS style guide.

To check whether the code follows the style guide just run command `yarn lint:js` or `npm run lint:js`

# Deployment

1. Build the initial version of the code. Run `yarn build` or `npm run build`
2. Stop the intial instance of PM2 running on the server - `pm2 delete app`
2. Run `pm2 start npm --name "app" -- start --watch`
4. Voila. Deployment complete

# Technical Notes

This should only be done in testing. Production server shoudn't be dropped. There is no confirmation before the DB is dropped.
1. If there is need to drop the database for testing purposes, Run `mongo hms --eval "printjson(db.dropDatabase())"`.
