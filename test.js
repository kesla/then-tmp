import test from 'tapava';
import fs from 'then-fs';
import _tmp from 'tmp';

import tmp from './lib';

test('tmp.file', async t => {
  const {path, fd, cleanupCallback} = await tmp.file();

  const actualStat = await fs.stat(path);
  t.true(actualStat.isFile(), 'tmp path exists');
  await t.notThrows(fs.write(fd, new Buffer('?'), 0, 1));
  t.is(typeof cleanupCallback, 'function');
});

test('tmp.fileSync', t => {
  t.is(tmp.fileSync, _tmp.fileSync);
});

test('tmp.dir', async t => {
  const {path, cleanupCallback} = await tmp.dir();

  const actualStat = await fs.stat(path);
  t.true(actualStat.isDirectory(), 'tmp path exists');
  t.is(typeof cleanupCallback, 'function');
});

test('tmp.dirSync', t => {
  t.is(tmp.dirSync, _tmp.dirSync);
});

test('tmp.tmpName', async t => {
  const path = await tmp.tmpName();
  t.truthy(path);
});

test('tmp.tmpNameSync', async t => {
  t.is(tmp.tmpNameSync, _tmp.tmpNameSync);
});
