import path from 'path';
import { createLogger, transports, format } from 'winston';

// logFormat used for console logging
const logFormat = format.printf((info) => {
  const formattedNamespace = info.metadata.namespace || '';

  return `${info.timestamp} [${info.level}] [${info.label}] [${formattedNamespace}]: ${info.message}`;
});

/**
 * Create a new winston logger.
 */
const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.label({ label: path.basename(require.main.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
    logFormat
  ),
  transports: [new transports.Console()],
});

/**
 * Creates a child logger with namespace for logging.
 *
 * @param {String} namespace
 * @returns {Object}
 */
logger.withNamespace = (namespace) => {
  return logger.child({ namespace });
};

export default logger;
