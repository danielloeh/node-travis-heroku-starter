# node-travis-heroku-starter

## Requirements

### Tools
- node.js
- git
- docker

### Accounts
- github.com
- travis-ci.org
- heroku.com


### Run it local:
- Run server: `npm start`
- Run tests: `npm test`
- Build docker image: `docker build --tag=heroku-test .`
- Run docker image: `docker run -d -p 3000:3000 heroku-test`

### Run CI server & deploy:
- Push the code to your github
- Allow travis-ci.org to access the github repository
- Create a heroku app
- Create an API key in your heroku account settings
- Add a env variable to your travis build `HEROKU_API_KEY` with the heroku API key.
