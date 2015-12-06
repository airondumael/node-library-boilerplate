[![Build Status](https://travis-ci.org/airondumael/node-library-boilerplate.svg?branch=master)](https://travis-ci.org/airondumael/node-library-boilerplate)
[![Coverage Status](https://coveralls.io/repos/airondumael/node-library-boilerplate/badge.svg?branch=master&service=github)](https://coveralls.io/github/airondumael/node-library-boilerplate?branch=master)
[![Dependency Status](https://david-dm.org/airondumael/node-library-boilerplate.svg)](https://david-dm.org/airondumael/node-library-boilerplate)
[![devDependency Status](https://david-dm.org/airondumael/node-library-boilerplate/dev-status.svg)](https://david-dm.org/airondumael/node-library-boilerplate#info=devDependencies)

node-library-boilerplate
===
Boilerplate for creating nodejs libraries. 

#### What is included?
- [x] es6 to es5 transpile on prepublish (babel-cli)
- [x] Test (mocha + chai)
- [x] Coverage (isparta + istanbul)

#### How to use it?
1. Download repository and remove .git folder

2. Edit package.json. Be sure to change ***name***, ***description***, ***version***, ***author***, ***repositories***, ***bugs*** and ***homepage***.

3. Update badges inside README.md

4. Install dependencies
    ```bash
    npm install
    ```

5. Run mocha test for development. So you can see if you're tests (even if you have not written one) are still passing.

    ```bash
    npm run dev
    ```
6. Write some tests. It's located at ./test

7. Write some codes to make your tests pass. It's located at ./src

8. Check coverage and improve your tests.
    ```
        npm run cover
    ```
    Then open at ./cover/index.html
    
9. Modify it as long as you want. 

#### Coveralls
I put .coveralls.yml in .gitignore as per advice on their site. If you want to update coverage after travis-ci run your tests you need to add "COVERALLS_REPO_TOKEN" environment on your travis-ci.

1. Go to https://coveralls.io and get your repo_token.
2. Go to https://travis-ci.org/<githubusername>/<projectname>/settings.
3. Add Environment Variables. 
4. Push another commit for it to update.
