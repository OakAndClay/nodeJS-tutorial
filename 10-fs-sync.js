const {readFileSync, writeFileSync} = require('fs')
console.log('START')

const first  = readFileSync ('./content/first.txt', 'utf8')
const second = readFileSync ('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}.`,
// can append the file instead of overwriting with
// { flag: 'a'} 
)

console.log('This task is finished.')
console.log('Starting the next one.')