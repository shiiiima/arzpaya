import React , {useState,useEffect} from "react";
import Table from "../../Components/Table/Table";
import GetInfo from "../../Services/GetInfo";

const Defaultt = ({iconFAv,handleFAvorites}) => {
  // load data
  const [data, setData] = useState([])
  const[data1,setData1]=useState([])
  const loadData = () => {
    let dataTmp = data;

  
  
    // get data
    GetInfo.find()
        .then(function (response) {

        if (
          response !== null 
         
        ) {
          setData([...data , ...response]);
  

        }
   
  
    
      })
      .catch(function (error) {
      
      });
    
    
      GetInfo.getinfo()
      .then(function (response) {
    
      if (
        response !== null 
       
      ) {
        setData([...data1 , ...response]);

        console.log("nerwwwwwwwwwww",data)
      }
 

  
    })
    .catch(function (error) {
    console.log(error)
    });
      
     
  };

  useEffect(() => {
    loadData();
  }, []);

    return (
        
        <div className="">
            <Table iconFAv={iconFAv} data={data} handleFAvorites={handleFAvorites} />
        </div>
    )
  };
  
  export default Defaultt;