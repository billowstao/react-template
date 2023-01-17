import { env } from 'node:process';

const { CI } = env;
const isCI: boolean = CI === 'true';

if (!isCI) {
  (await import('husky')).install();
}
