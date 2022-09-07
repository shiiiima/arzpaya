import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import GetInfo from "../../Services/GetInfo";

const Defaultt = ({ iconFAv, handleFAvorites }) => {
  const [data, setData] = useState([]);

  const loadData = () => {
    let dataTmp = data;
    GetInfo.find()
      .then(function (response) {
        if (response !== null) {
          setData([...data, ...response]);
        }
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="">
      <Table iconFAv={iconFAv} data={data} handleFAvorites={handleFAvorites} />
    </div>
  );
};

export default Defaultt;
