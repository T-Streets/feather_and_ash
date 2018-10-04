
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    moduel.exports = require('./dev')
}