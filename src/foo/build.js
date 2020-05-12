const fs = require('fs-extra');
const path = require('path')

const BUILD_PATH = path.join(__dirname, '..', 'foo');
const SOMETHING = path.join(BUILD_PATH, 'build')
console.log('!!!', BUILD_PATH)
console.log('???', SOMETHING)

fs.outputFile(SOMETHING, '<div>alskdfj</div>');