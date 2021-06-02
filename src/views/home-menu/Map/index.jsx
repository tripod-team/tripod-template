import React, { useEffect } from "react";

import { getConfigList } from "api/user";

const Map = () => {
  useEffect(() => {
    getConfigList({
      config_code: "layers",
      token:
        "qiYrxXEv5mJPW6-dU5_wQVzk0OMNKxEfJhIFje3pHdMNNGXuecoz2NC4MuGBeBqWNBGxCD_9rXfkYMy7rQYCkDBK3eLyAZh7MrUp0sPHisiOsrJZ4-Webgiz4c2KFWXLGxsPDXqKsxULZRgkYsx_yeSmBsOKzTWNLAax1-JzQvVE3ge7QEDrEhlNk7DeItdcgUelGUMqUvj7kImu2gUS3Q==",
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return <div>Home-Map</div>;
};

export default Map;
