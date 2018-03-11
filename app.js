let express = require('express');
const config = require('./common/config');
let routers = require('./routers');

let app = express();
routers(app);

app.listen(config.port, () => console.log(`Running at :${config.port}`));