import api from 'api';
import config from './config';

/**
 * 查询用户配置信息
 * @param {config_code} 配置代码
 * @param {token}
 *
 */
export async function getConfigList(options) {
  const res = api.post(
    config.getConfigList,
    {
      ...options,
      system_code: 'COMBINE',
    },
    {
      baseURL: config.baseURL,
    }
  );
  return res;
}
