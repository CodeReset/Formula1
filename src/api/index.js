import axios from 'axios';

import config from './config';

const apiHelper = async (method, endpoint) => {
  try {
    const {data} = await axios({
      method: method,
      url: config.api + endpoint,
    });
    return data.MRData;
  } catch (e) {
    console.log(e);
  }
  // When we will decide t0 change axios to fetch
  // try {
  //   const res = await fetch(config.api + endpoint, {
  //     method: method,
  //     headers: {'Content-type': 'application/json'},
  //   });

  //   const result = await res.json();

  //   return result.MRData;
  // } catch (e) {
  //   console.log(e);
  // }
};

export {apiHelper};
