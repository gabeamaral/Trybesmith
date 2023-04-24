import jwt from 'jsonwebtoken';

const SECRET = 'barbatosLuposRex';

const config: object = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = (username: string, id: number) => {
  const tokenJwt = jwt.sign({ data: { username, id } }, SECRET, config);
  return tokenJwt;
};

export default generateToken;
