let fs = require('fs');
let { join } = require('path');

const dotEnv = require("dotenv");

/**
 * 获取环境配置
 */
const getEnv = () => {
  let result = dotEnv.config({
    path: `./.env.${process.env.ENV}`,
  });
  if (result.error) {
    result = dotEnv.config();
  }
  const c = {};
  for (const key in result.parsed) {
    c[key] = JSON.stringify(result.parsed[key]);
  }
  return c;
};

/**
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
 function findSync(startPath) {
  let result = [];
  function finder(path) {
    let files = fs.readdirSync(path);
    files.forEach((val, index) => {
      let fPath = join(path, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.push(fPath);
    });
  }
  finder(join(process.cwd(),startPath));
  return result;
}


module.exports = {
  getEnv,
  findSync
};

