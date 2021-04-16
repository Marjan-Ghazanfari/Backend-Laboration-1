const port = process.env.PORT || 9999;
const app = require('./app');

app.listen(port, () => console.log(`webserver at: http://localhost:${port}`));