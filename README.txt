*Step 1: Initialize the npm project and configure WebdriverIO*

# Initialize the npm project
npm install

*Step 2: Run Your Tests*

# Run the tests using the configuration from wdio.conf.js
npm run wdio

# Or run the tests directly using npx
npx wdio run ./wdio.conf.js

*Step 4: Run Debugging*
npx wdio --inspect wdio.conf.js
