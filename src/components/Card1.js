import "./CardsStyles.css";
import CardsData1 from "./CardsData1";

function Card1() {
  return (
    <div className="trip">
      <h1>Carbon Footprint: Causes, Effects & Solutions</h1>
      <div className="tripcard">
        <CardsData1
        image={"https://th.bing.com/th/id/OIP.E6l4NJXny-amwwcJJkFSDgHaHa?rs=1&pid=ImgDetMain"}
        heading="Causes"
        text="● Population growth and increase in consumption levels

        ● Increase in living standards
        
        ● Increase in energy consumption
        
        ● Deforestation
        
        ● Industrial processes
        
        ● Agriculture
        
        ● Vehicles
        
        ● Airplanes
        
        ● Ships
        
        ● Waste disposal
        
        ● Lobbying problem
        
        ● Lack of education"
        />

        <CardsData1
        image={"https://images.unsplash.com/photo-1512621387945-efb0d554f388?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        heading="Effects"
        text="● Global warming                 

        ● Air pollution
        
        ● Acid rain
        
        ● Effects on humans
        
        ● Effects on animals
        
        ● Effects on plants
        
        ● Effects on aquatic life
        
        ● Effects on the whole environmental system"
        />


        <CardsData1
        image={"https://th.bing.com/th/id/OIP.Ht8Z6PbOtXFxveeJXOxHjwHaE8?rs=1&pid=ImgDetMain"}
        heading="Solution"
        text="● Switch from cars to alternative transport facilities

        ● Switch from conventional to electric cars
        
        ● Avoid commuting
        
        ● Save energy
        
        ● Buy local food
        
        ● Reduce meat consumption
        
        ● Organic gardening
        
        ● Reduce consumption
        
        ● Recycle and reuse
        
        ● Education
        
        ● Convince others"
        />
      </div>
    </div>
  );
}


export default Card1;
