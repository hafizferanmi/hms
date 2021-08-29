import { isProduction, isDevelopment, isStaging } from "./env";

import productionConfig from "../config/production.json";
import developmentConfig from "../config/development.json";
import stagingConfig from "../config/staging.json";
import defaultConfig from "../config/default.json";

let config;

if (isProduction) {
  config = productionConfig;
} else if (isDevelopment) {
  config = developmentConfig;
} else if (isStaging) {
  config = stagingConfig;
} else {
  config = defaultConfig;
}

export default config;
