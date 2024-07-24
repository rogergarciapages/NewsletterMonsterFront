// Comment out or remove the logger middleware
// import { NextApiRequest, NextApiResponse } from 'next';

// const logger = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
//   console.log(`[${req.method}] ${req.url}`);
//   res.on('finish', () => {
//     console.log(`[${req.method}] ${req.url} - ${res.statusCode}`);
//   });
//   next();
// };

// export default logger;
