import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import GetInfo from "../../Services/GetInfo";
function Defi({handleFAvorites}) {
    const [data, setData] = useState([]);




// load data
const loadData = () => {
  let dataTmp = data;

    let defi = []

  // get data
  GetInfo.find()
      .then(function (response) {
       
      if (
        response !== null 
       
      ) {
         defi=  response.filter(item =>item.Id%2 !=0)
        setData([...dataTmp , ...defi]);

       
      }
 

  
    })
    .catch(function (error) {
    
    });
  
};

useEffect(() => {
  loadData();
}, []);


    return (<div>
        
        <Table data={data} handleFAvorites={ handleFAvorites} />
    </div>)
}
export default Defi;