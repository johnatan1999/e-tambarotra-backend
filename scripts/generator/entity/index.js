// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateEntity } = require('./entity.generator');

const args = process.argv;

const libName = args[2];
const entityName = args[3];
generateEntity(libName, entityName);

console.log('##> Entity generators executed');

process.exit(0);
