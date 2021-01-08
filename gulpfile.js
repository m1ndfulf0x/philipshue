const fs = require('fs');

/*
*
* write a mock file for the CI
*/
function writeApiConfigFile(done) {
    data = `export const ApiConfig:{bridgeIp:string, user:string} = { bridgeIp: '123', user: 'test'};`

    fs.writeFileSync('src/app/service/api-config.ts', data);
    done();
}

exports.writeApiConfigFile = writeApiConfigFile;
