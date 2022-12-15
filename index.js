const path = require("path");
const fs = require("fs/promises");
const http = require("http");

const PORT = 8000;

const app = http.createServer(async (request, response) => {

  const url = request.url;

  if (url === '/') {
    
    const htmlPath = path.resolve(`./calculadora/index.html`)
    const html = await fs.readFile(htmlPath, 'utf8');
    response.setHeader("Content-Type", "text/html");
    response.write(html);

  } else if(url.includes( 'style.css')) {

    console.log('css rules')
    const cssPath = path.resolve(`./calculadora/${url}`);
    const cssSheet = await fs.readFile (cssPath, 'utf8');
    response.setHeader("Content-Type","text/css");
    response.write(cssSheet);

  } else {

    const jsPath = path.resolve(`./calculadora/${url}`);
    const jsSheet = await fs.readFile (jsPath, 'utf8');
    response.setHeader("Content-Type", "text/javascript");
    response.write(jsSheet);
  }  

  response.end();
})

app.listen(PORT);

console.log('server runiando')