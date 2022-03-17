const express = require('express');
require('express-async-errors');

const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const cosrsOptions = { credentials: true, origin: process.env.URL || '*' };

app.use(cors(cosrsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(routes);

app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(PORT, () => console.log(`🔥 server started at http://localhost:${PORT}`));
