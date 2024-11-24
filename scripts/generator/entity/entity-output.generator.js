// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

const ENTITY_OUTPUT = path.join(
  process.cwd(),
  'src/modules/libs/%LIB_NAME%/src/application/models/output',
);

const generateOutput = (library_name, entity_name) => {
  const entity = '';
  const newEntityPath = `${path.join(ENTITY_OUTPUT.replace('%LIB_NAME%', library_name), entity_name)}.output.ts`;
  if (!fs.existsSync(newEntityPath)) {
    fs.mkdirSync(path.dirname(newEntityPath), { recursive: true });
    fs.writeFileSync(newEntityPath, entity);
    console.log(`##> Entity generated in ${newEntityPath}`);
  } else {
    console.log(`##> Entity already exists in ${newEntityPath}`);
  }
};

module.exports = {
  generateOutput,
};
