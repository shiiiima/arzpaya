import axios from "axios";

import General from "../Utils/General"
export default {

  find: async function () {
    try {
      const response = await axios({
        url: General.siteUrl+ '/general/CurrencyType',
        method: "Get",
       
      });
        // console.log(response.data.Data.En)
      return response.data.Data.En;
    } catch (error) {
      throw error;
    }
    },

  getinfo: async function () {
    try {
      const response = await axios({
        url: 'https://api.arzpaya.com/public/ExchangeInfo',
        method: "Get",
       
      });

      return response ;
    } catch (error) {
      throw error;
    }
    },
    
};
