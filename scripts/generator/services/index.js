// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateUsecase } = require('./usecase.generator');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateServiceInbound } = require('./service-inbound.generator');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateServiceOutbound } = require('./service-outbound.generator');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateService } = require('./service-application.generator');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateAdapter } = require('./adapter.generator');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateController } = require('./controller.generator');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { generateOutput } = require('../entity/entity-output.generator');

const args = process.argv;

const libName = args[2];
const subFolder = args[3];
const serviceName = args[4];
generateOutput(libName, serviceName);
generateController(subFolder, serviceName);
generateUsecase(libName, subFolder, serviceName);
generateService(libName, subFolder, serviceName);
generateAdapter(libName, subFolder, serviceName);
generateServiceInbound(libName, subFolder, serviceName);
generateServiceOutbound(libName, subFolder, serviceName);

console.log('##> Generators executed');

process.exit(0);
