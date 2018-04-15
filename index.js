const express = require('express');
const compression = require('compression');
const useragent = require('express-useragent');

const path = require('path');

const app = express();

const staticDir = '/build';
const isProduction = process.env.NODE_ENV === 'production';

app.use(useragent.express());
app.use(compression());

app.get('/', (req, res) => {
  const htmlPath = (html) => path.join(__dirname, `${staticDir}`, html);

  if (req.useragent.isDesktop){
    res.sendFile(htmlPath('desktop.html'));
  } else if (req.useragent.isIpad || req.useragent.isAndroidTablet || req.useragent.isTablet ){
    res.sendFile(htmlPath('tablet.html'));
  }  else {
    res.sendFile(htmlPath('mobile.html'));
  }
});

app.use(express.static(`.${staticDir}`));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}).use((err, req, res, next) => {
  if (!isProduction) {
    if (err) {
      console.error(err.stack);
    }
  }

  res.status(err.status || 500).send('Error');
});

app.listen(process.env.PORT || 3001);
