#Setup environment

1: npm i --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0

2: npm i express mongoose

3: create file .babelrc in root folder

{ "presets": ["env","stage-0"] }

4: package.json

"script": "nodemon ./src/app.js --exec babel-node -e js"


*( run command line line : npm i -g babel-cli ).


#Setup mongodb for Macos

1: Run command line

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2: brew tap mongodb/brew

3: brew install mongodb-community

4: brew services start mongodb-community

5: Download GUI Robo3T not Studio Robo3T
