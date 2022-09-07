import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import GetInfo from "../../Services/GetInfo";
function Favorites({ fav }) {
  const [data, setData] = useState([]);
  const loadData = () => {
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
  const favoriteList = data.filter((item) => fav.includes(item.Id));
  return (
    <div>
      <Table data={favoriteList} />
    </div>
  );
}
export default Favorites;
