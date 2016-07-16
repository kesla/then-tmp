/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import tmp from 'then-tmp';

tmp.file().then(({path, fd, cleanupCallback}) => {
});

tmp.dir().then(({path, cleanupCallback}) => {
});

tmp.tmpName().then(path => {
});

// *Sync-methods are aliases to the tmp module
const {name: fileName} = tmp.fileSync();
const {name: dirName} = tmp.dirSync();
const tmpName = tmp.tmpNameSync();
