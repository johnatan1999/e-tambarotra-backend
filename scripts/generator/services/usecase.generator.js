// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const SERVICE_FOLDER = path.join(
  process.cwd(),
  'src/modules/libs/%LIB_NAME%/src/core/usecases/%SUB_FOLDER%',
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

const generateUsecase = (library_name, sub_folder, service_name) => {
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
  const newUsecasePath = `${path.join(realPath, service_name_lowercase)}.usecase.ts`;

  if (!fs.existsSync(newUsecasePath)) {
    fs.mkdirSync(path.dirname(newUsecasePath), { recursive: true });
    fs.writeFileSync(newUsecasePath, service);
    console.log(`##> Usecase generated in ${newUsecasePath}`);
  } else {
    console.log(`##> Usecase already existes in ${newUsecasePath}`);
  }
};

module.exports = {
  generateUsecase,
};
