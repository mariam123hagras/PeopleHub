const fs = require("fs");
const yargs = require("yargs");

const addData=(id,fname,lname,age,city)=>{
    const allData=loadInfo();
    
    
        // id check
        const duplicated=allData.filter((obj)=>{
            return obj.id===id

        })
        
        
        if (duplicated.length === 0&& allData.length < 10){

            
         
             allData.push(
            {
                id:id,
                fname:fname,
                lname:lname,
                age:age,
                city:city
                
            }
           
        )
        }
        else{
            console.log("duplicated or greater than 10");
        }
         saveInfo(allData)
    }
  
    const readInfo=(id)=>{
        const allData=loadInfo();
        const itemNeeded=allData.find((obj=>{
            return obj.id==id ;
        })) || allData;
        console.log(itemNeeded)

    }


       
       
    


const loadInfo=()=>{
    try{
const dataJson=fs.readFileSync("data1.json").toString()
     return JSON.parse(dataJson);
    }


    catch{
        return []
    }

}

const saveInfo=(allData)=>{
    const saveallDataJson=JSON.stringify(allData);
    fs.writeFileSync("data1.json",saveallDataJson);


}
const deleteData = (id) => {
    const allData = loadInfo();
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id;  // Simple condition to keep non-matching IDs
    });
    
    if (dataToKeep.length === allData.length) {
        console.log(`No item found with ID ${id}`);
    } else {
        console.log(`Item with ID ${id} deleted successfully`);
    }
    
    saveInfo(dataToKeep);
}
const deleteAllData = () => {
    saveInfo([]);  // Simply save an empty array
    console.log("All data has been deleted");
}
const listData=(fname,lname,city)=>{
     const allData= loadInfo();
     allData.forEach((obj)=>{
        console.log(obj.fname,obj.lname," " ,obj.city)
     })
}
module.exports={
    addData,
    readInfo,
    deleteData,
    deleteAllData,listData
   
}