import { createLogger, transports } from "winston";

export const logger = createLogger({ // This app won't be reaching production anytime soon, so for now only console output is fine.
  level: "debug",
  transports: [new transports.Console()],
  exitOnError: false,
});
