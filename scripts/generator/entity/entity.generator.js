// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

const ENTITY_FOLDER = path.join(
  process.cwd(),
  '/src/modules/libs/%LIB_NAME%/src/core/models/entities',
);
// const ENTITY_OUTPUT = path.join(
//   process.cwd(),
//   'src/modules/libs/sales-lib/src/application/models/output',
// );
const ENTITY_INPUT = path.join(
  process.cwd(),
  '/src/modules/libs/%LIB_NAME%/src/core/models/inputs',
);

const generateEntity = (library_name, entity_name) => {
  const entity = '';
  const entities = [
    `${path.join(ENTITY_FOLDER.replace('%LIB_NAME%', library_name), entity_name)}.entity.ts`,
    // `${path.join(ENTITY_OUTPUT, entity_name)}.output.ts`,
    `${path.join(ENTITY_INPUT.replace('%LIB_NAME%', library_name), entity_name)}.input.ts`,
  ];
  for (const newEntityPath of entities) {
    if (!fs.existsSync(newEntityPath)) {
      fs.mkdirSync(path.dirname(newEntityPath), { recursive: true });
      fs.writeFileSync(newEntityPath, entity);
      console.log(`##> Entity generated in ${newEntityPath}`);
    } else {
      console.log(`##> Entity already exists in ${newEntityPath}`);
    }
  }
};

module.exports = {
  generateEntity,
};
