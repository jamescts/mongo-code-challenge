import { createLogger, transports } from 'winston';

const logger = createLogger({
  /* This app won't be reaching production anytime soon, so for now only console output is fine.
  If we wanted a logfile, all we'd have to do is configure it here. */
  level: 'debug',
  transports: [new transports.Console()],
  exitOnError: false,
});

export default logger;
