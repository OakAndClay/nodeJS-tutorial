// npm global command comes with node
// npm --version

// local dependency - only used in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (Stores important information about the project/packages}
// manual approach (create package.joson in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything defaults)

const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)