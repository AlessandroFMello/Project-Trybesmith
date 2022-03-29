import 'dotenv/config';
import { sign } from 'jsonwebtoken';
// import TokenData from '../interfaces/TokenData';

const SECRET = 'minhasenhasupersecretaqueninguemnuncavaidescobrir';

const tokenGenerator = (id: number, username: string) => sign(
  { id, username },
  SECRET,
  { expiresIn: '1d', algorithm: 'HS256' },
);

export default tokenGenerator;