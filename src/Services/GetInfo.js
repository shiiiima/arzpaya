import axios from "axios";
import General from "../Utils/General";
export default {
  find: async function () {
    try {

      const response = await axios({
        url: General.siteUrl + "/general/CurrencyType",
        method: "Get",
      });
      console.log(response);
      return response.data.Data.En;
    } catch (error) {
      throw error;
    }
  },
};
