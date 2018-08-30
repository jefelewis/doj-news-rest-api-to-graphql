// Imports: Dependencies
import express from 'express';
import cors from 'cors';
import SERVER from './graphql/schema';

const APP = express();


// Database: Connection


// Middleware: CORS
APP.use(cors());


// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP,
});


// Use: Static Files


// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});


// Exports
export default APP;
