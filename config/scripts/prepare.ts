import { env } from 'node:process';

const { CI } = env;
const isCI: boolean = CI === 'true';

if (!isCI) {
  const husky = await import('husky');
  husky.install();
}
