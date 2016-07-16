import _tmp from 'tmp';
import promisify from 'promisify-function';

const file = promisify(_tmp.file);
const dir = promisify(_tmp.dir);
const tmpName = promisify(_tmp.tmpName);

module.exports = {
  file: () =>
    file().then(([path, fd, cleanupCallback]) => ({
      path, fd, cleanupCallback
    })),
  fileSync: _tmp.fileSync,
  dir: () =>
    dir().then(([path, cleanupCallback]) => ({
      path, cleanupCallback
    })),
  dirSync: _tmp.dirSync,
  tmpName,
  tmpNameSync: _tmp.tmpNameSync
};
