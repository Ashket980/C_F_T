const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express()
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||5000

//schema
const schemaData=mongoose.Schema({
    UserName:String,
    Agriculture_Waste:Number,
    Water_consumption:Number,
    Deforestation:Number,
    A_new_coal_mine:Number,
    Wind_Turbin:Number,
    Solar_Panel:Number,
    Steel_Consumption:Number,
    lpg:Number,
    elec:Number,
    car:Number,
    bus:Number,
    train:Number,
    tv:Number,
    phone:Number,
    pc:Number,
    pcu:Number,
    tea:Number,
    bread:Number,
    milk:Number,
    rice:Number,
    nonveg:Number,
    newcar:Number,
    house:Number,
    plastic:Number,
    water:Number,
    agro:Number,
    mining:Number,
    power:Number,
    cement:Number,
    iron:Number,
    chemical:Number,
    nonm:Number,

},{
    timestamps:true             //creates a createdAt , updatedAt field on models containig timestamps that get automatically updated when the model changes.
})

const userModel=mongoose.model("carbon(new)",schemaData)

//read
app.get("/",async(req,res)=>{
    const data=await userModel.find({})
    res.json({success:true,data : data})
})

//create
app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data=new userModel(req.body)
    await data.save()
    
    res.send({success:true,message:"data saved successfully"})
})












app.get("/avg", async (req, res, next) => {
        userModel.find({})
        .then((user)=>{
          try {
                const sumResult = user.aggregate([
                    {
                        $group: {
                            
                                _id: null,
                                avg_bus: {
                                  $avg: "$bus",
                                },
                                avg_tv: {
                                  $avg: "$tv",
                                },
                                avg_house: {
                                  $avg: "$house",
                                },
                                avg_agro: {
                                  $avg: "$agro",
                                },
                                avg_Wind_Turbin: {
                                  $avg: "$Wind_Turbin",
                                },
                                avg_newcar: {
                                  $avg: "$newcar",
                                },
                                avg_tea: {
                                  $avg: "$tea",
                                },
                                avg_Agriculture_Waste: {
                                  $avg: "$Agriculture_Waste",
                                },
                                avg_car: {
                                  $avg: "$car",
                                },
                                avg_A_new_coal_mine: {
                                  $avg: "$A_new_coal_mine",
                                },
                                avg_power: {
                                  $avg: "$power",
                                },
                                avg_train: {
                                  $avg: "$train",
                                },
                                avg_Deforestation: {
                                  $avg: "$Deforestation",
                                },
                                avg_Solar_Panel: {
                                  $avg: "$Solar_Panel",
                                },
                                avg_lpg: {
                                  $avg: "$lpg",
                                },
                                avg_bread: {
                                  $avg: "$bread",
                                },
                                avg_pcu: {
                                  $avg: "$pcu",
                                },
                                avg_milk: {
                                  $avg: "$milk",
                                },
                                avg_elec: {
                                  $avg: "$elec",
                                },
                                avg_mining: {
                                  $avg: "$mining",
                                },
                                avg_Steel_Consumption: {
                                  $avg: "$Steel_Consumption",
                                },
                                avg_rice: {
                                  $avg: "$rice",
                                },
                                avg_water: {
                                  $avg: "$water",
                                },
                                avg_nonveg: {
                                  $avg: "$nonveg",
                                },
                                avg_Water_consumption: {
                                  $avg: "$Water_consumption",
                                },
                                avg_plastic: {
                                  $avg: "$plastic",
                                },
                                avg_cement: {
                                  $avg: "$cement",
                                },
                                avg_pc: {
                                  $avg: "$pc",
                                },
                                avg_nonm: {
                                  $avg: "$nonm",
                                },
                                avg_phone: {
                                  $avg: "$phone",
                                },
                                avg_chemical: {
                                  $avg: "$chemical",
                                },
                                avg_iron: {
                                  $avg: "$iron",
                                },
                              }
                        }
                    
                ]).toArray();
                
                const avg = sumResult.length > 0 ? sumResult[0].total : 0;
                res.json({ success: true, sum: sum });
            } catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }

        }, (err)=>next(err))
        res.json({output:userModel, success:true})
    
});
  
app.get("/sum", async (req, res) => {
    try {
        const sumResult = await userModel.aggregate([
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: {
                            $add: [
                              "$UserName",
                                "$Agriculture_Waste",
                                "$Water_consumption",
                                "$Deforestation",
                                "$A_new_coal_mine",
                                "$Wind_Turbin",
                                "$Solar_Panel",
                                "$Steel_Consumption",
                                "$lpg",
                                "$elec",
                                "$car",
                                "$bus",
                                "$train",
                                "$tv",
                                "$phone",
                                "$pc",
                                "$pcu",
                                "$tea",
                                "$bread",
                                "$milk",
                                "$rice",
                                "$nonveg",
                                "$newcar",
                                "$house",
                                "$plastic",
                                "$water",
                                "$agro",
                                "$mining",
                                "$power",
                                "$cement",
                                "$iron",
                                "$chemical",
                                "$nonm",
                                
                            ]
                        }
                    }
                }
            }
        ]).toArray();
        
        const sum = sumResult.length > 0 ? sumResult[0].total : 0;
        res.json({ success: true, sum: sum });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});



app.get("/",(req,res)=>{
    res.json({message:"server is running"})
})


// mongoose.connect("mongodb://0.0.0.0:27017/SDP")

mongoose.connect("mongodb+srv://potter919980:lW0lgy7urLUZYe1g@cluster1.hfuletp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")


.then(()=>{
    console.log("connect to DB")
    app.listen(PORT,()=>console.log("server is running"))})
.catch((err)=>console.log(err))


