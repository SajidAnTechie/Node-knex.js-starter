import verifyToken from '../utils/jwt';
import HttpStatus from 'http-status-codes';
import AuthenticationError from '../errors/authentication';

/**
 * Authenticate user before requesting resource.
 *
 * @param {Object}} req
 * @param {Object} res
 * @param {fun} next
 * @returns
 */
const authenticateRequest = (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  if (!(authorization && authorization.toLowerCase().startsWith('bearer')))
    throw new AuthenticationError(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED);

  const token = authorization && authorization.split(' ')[1];

  const decodedToken = verifyToken(token, process.env.JWT_SCERET_KEY);

  if (decodedToken) return next();
};

export default authenticateRequest;
