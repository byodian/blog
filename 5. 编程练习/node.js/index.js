const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  const pathName = url.parse(req.url, true).pathname;
  console.log(pathName);
  const id = url.parse(req.url, true).query.id;

  // PRODUCT URL
  if (pathName === '/products' || pathName === '/') {
    res.writeHead(200, {'Content-type': 'text/html'});

    fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (error, data) => {

      let overviewOutput = data;
      fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (error, data) => {

        const cardsOutput = laptopData.map(el => replaceHtml(data, el)).join('');
        overviewOutput = overviewOutput.replace('{%CARD%}', cardsOutput);
        res.end(overviewOutput);
      })
    });
  }

  // LAPTOP URL
  else if (pathName === '/laptop' && id <= laptopData.length) {
    res.writeHead(200, {'Content-type': 'text/html'});

    fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (error, data) => {
      const laptop = laptopData[id];

      const output = replaceHtml(data, laptop);

      res.end(output);
    });
    }

        // iMAGE URL
        else if (/\.(jpg|jpeg|gif|png)$/.test(pathName)) {
          fs.readFile(`${__dirname}/data/img${pathName}`, (error, data) => {
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.end(data);
          });

    // NO URL
  } else {
    res.writeHead(404, {'Content-type': 'text/html'});
    res.end('This is the ERROR page');
  }
});  

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function replaceHtml(data, laptop) {
  let output = data.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%PRODUCTNAME%}/g, laptop.productName);
  output = output.replace(/{%IMAGE%}/g, laptop.image);
  output = output.replace(/{%CPU%}/g, laptop.cpu);
  output = output.replace(/{%SCREEN%}/g, laptop.screen);
  output = output.replace(/{%STORAGE%}/g, laptop.storage);
  output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
  output = output.replace(/{%RAM%}/g, laptop.ram);
  output = output.replace(/{%ID%}/g, laptop.id);
  return output;
}