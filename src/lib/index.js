const dotEnv = require('dotenv');

/**
 * 获取环境配置
 */
const getEnv = () => {
  let result = dotEnv.config({
    path: `./.env.${process.env.ENV}`
  });
  if (result.error) {
    result = dotEnv.config();
  }
  const c = {};
  for (const key in result.parsed) {
    c[key] = JSON.stringify(result.parsed[key]);
  }
  return c
}

module.exports = {
  getEnv
}