const fs = require("fs");
const { describe, demandOption } = require("yargs");
fs.writeFileSync("data1.txt", "mariam");

const yargs = require("yargs") 
// you parse yargs  after yargs.command to make it work

const datalogic=require("./datalogic")

console.log("Raw Args:", process.argv);
yargs.command({
    command:"add",
    describe:"to add an item",
    builder:{
        id:{
            describe:"the id of the person [add]",
            demandOption:true,
            type:"string"
        }
        ,
        fname:{
       describe:"this is the first name in add command [add]",
       demandOption:true,
       type:"string"
        },
        lname:{
            describe:"the last name of user [add]",
            demandOption:true,
            type:"string"

        },
        age:{
            describe:"the age of a user [add]",
            demandOption:true,
            type:"string"
        },
        city:{
            describe:"the city of a user [add]",
            demandOption:true,
            type:"string"
        }

    },
    handler:(x)=>{
        console.log("added")
        datalogic.addData(x.id,x.fname,x.lname,x.age,x.city)

    }
})

   yargs.command({
        command:"read",
        describe:"to read an item",
        builder:{
           id:{
            describe:"to read an item by id",
            type:"string"
            
           }

        },
        handler: (x)=>{
            datalogic.readInfo(x.id)
        }
    })

    yargs.command({
        command:"delete",
        describe:"to delete an item",
        builder:{
            id:{
                describe:"delete an id ",
               
                type:"string"
            }
        },
    handler:(x)=>{
        if (x.id) {
            datalogic.deleteData(x.id);
        } else {
            datalogic.deleteAllData();
        }
    
    }

        }

    )
    yargs.command({
        command:"list",
        describe:"to list an item",
       
       handler:()=>{
datalogic.listData()
       }

    })
yargs.parse()
console.log("Yargs Args:", yargs);


