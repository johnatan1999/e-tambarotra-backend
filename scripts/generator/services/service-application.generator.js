// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const SERVICE_FOLDER = path.join(
  process.cwd(),
  'src/modules/libs/%LIB_NAME%/src/application/services/%SUB_FOLDER%',
);
const SCRIPT_DIR = path.join(process.cwd(), '/scripts');
// const TEMPLATE_PATH = path.join(
//   SCRIPT_DIR,
//   '/generator/templates/service.template',
// );

const convertCapitalLettersToDashes = (str) => {
  return str
    .split(/(?=[A-Z])/g)
    .join('-')
    .toLowerCase()
    .replace(/^-/, '');
};

const generateService = (library_name, sub_folder, service_name) => {
  // const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  // const service = template
  //   .replace(/{EntityName}/g, service_name)
  //   .replace(
  //     /{EntityNameToLower}/g,
  //     convertCapitalLettersToDashes(service_name),
  //   );
  const service = '';
  const service_name_lowercase = convertCapitalLettersToDashes(service_name);
  const realPath = path.join(
    SERVICE_FOLDER.replace('%LIB_NAME%', library_name).replace(
      '%SUB_FOLDER%',
      sub_folder,
    ),
  );
  const newServicePath = `${path.join(realPath, service_name_lowercase)}.service.ts`;

  if (!fs.existsSync(newServicePath)) {
    fs.mkdirSync(path.dirname(newServicePath), { recursive: true });
    fs.writeFileSync(newServicePath, service);
    console.log(`##> Service generated in ${newServicePath}`);
  } else {
    console.log(`##> Service already exists in ${newServicePath}`);
  }
};

module.exports = {
  generateService,
};
