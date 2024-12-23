const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=iYczBKjC#fFFo1WztmLi05MXhfRajvFFwqPMjnmELHETLteE0fy0' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'Put your github username': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'Put your github auth token': process.env.GITHUB_AUTH_TOKEN
};
