const cheerio = require("cheerio");
const fs = require('fs');
const path = require("path")

let platforms = []
const files = fs.readdirSync('./out')
files.forEach(function (item, index) {
  let stat = fs.statSync("./out/" + item)
  if (!stat.isDirectory() && item.includes('.html') && item !== "404.html") {
    const filepath = path.join(__dirname, `./out/${item}`)
    platforms.push(filepath);
  }
})

platforms.forEach(filepath => {
  const HtmlFile = fs.readFileSync(filepath, 'utf8');
  replaceJs(HtmlFile, filepath);
})

function replaceJs(htmlStr, filepath) {
  const $ = cheerio.load(htmlStr)
  const scriptArr = $('script');
  const cssArr = $('link');

  for (const item of scriptArr) {
    if (item.attribs.src) {
      const srcPath = path.join(__dirname, `.${item.attribs.src}`);
      // item.attribs.src = null;
      Reflect.deleteProperty(item.attribs, 'src');
      const srcContent = fs.readFileSync(srcPath, 'utf8');
      item.children = [{
        data: srcContent,
        type: 'text'
      }];
    }
  }

  for (const item of cssArr) {
    if (item.attribs.rel === "stylesheet") {
      const srcPath = path.join(__dirname, `.${item.attribs.href}`);
      const srcContent = fs.readFileSync(srcPath, 'utf8');
      item.attribs = {};
      Reflect.set(item, 'type', 'style');
      Reflect.set(item, 'name', 'style');
      Reflect.set(item, 'children', [{
        type: 'text',
        data: srcContent
      }]);
    }
  }
  const str = escape2Html($.html());

  fs.writeFile(filepath, str, 'utf8', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('------写入成功-—----')
  })
}
