import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import GetInfo from "../../Services/GetInfo";
function NFT({ handleFAvorites }) {
  const [data, setData] = useState([]);
  const loadData = () => {
    let dataTmp = data;
    let nft = [];
    GetInfo.find()
      .then(function (response) {
        if (response !== null) {
          nft = response.filter((item) => item.Id > 28);
          setData([...dataTmp, ...nft]);
        }
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Table data={data} handleFAvorites={handleFAvorites} itemsPerPage={10} />
    </div>
  );
}
export default NFT;
