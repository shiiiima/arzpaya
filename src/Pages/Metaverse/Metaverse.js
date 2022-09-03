import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import GetInfo from "../../Services/GetInfo";
function Metaverse({handleFAvorites}) {
    const [data, setData] = useState([]);




    // load data
    const loadData = () => {
      let dataTmp = data;
    
        let metaverse = []
    
      // get data
      GetInfo.find()
          .then(function (response) {
   
          if (
            response !== null 
           
          ) {
             metaverse=  response.filter(item =>(item.Id + 2)%2 ==0 )
            setData([...dataTmp , ...metaverse]);
    
           
          }
     
    
      
        })
        .catch(function (error) {
        
        });
      
    };
    
    useEffect(() => {
      loadData();
    }, []);

    
        return (<div>
            
            <Table data={data} handleFAvorites={handleFAvorites} />
        </div>)
}
export default Metaverse;