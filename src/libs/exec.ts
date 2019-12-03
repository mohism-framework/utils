import { spawnSync, SpawnSyncReturns } from 'child_process';

export const exec = (cmd: string): SpawnSyncReturns<Buffer> => {
  const argv = cmd.split(' ');

  return spawnSync(argv[0], argv.slice(1), {
    stdio: ['inherit', 'pipe', 'pipe'],
  });
};