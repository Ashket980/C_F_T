import "./CardsStyles.css";
import CardsData from "./CardsData";

function Cards() {
  return (
    <div className="trip">
      <h1>Recent News</h1>
      <p>Some articles on recent events</p>
      <div className="tripcard">
        <CardsData
        image={"https://images.unsplash.com/photo-1558448495-5ef3fce92344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        heading="Now or Never"
        text="“It's now or never, if we want to limit global warming to 1.5°C (2.7°F); without immediate and deep emissions reductions across all sectors, it will be impossible,” said Jim Skea, Co-Chair of IPCC Working Group III, which released the latest report.
"
        />

        <CardsData
        image={"https://images.unsplash.com/photo-1472114864173-39596323454f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        heading="Encouraging Climate Action"
        text="“We are at a crossroads. The decisions we make now can secure a liveable future,” said IPCC Chair Hoesung Lee. “I am encouraged by climate action being taken in many countries. There are policies, regulations and market instruments that are proving effective. If these are scaled up and applied more widely and equitably, they can support deep emissions reductions and stimulate innovation.”"
        />


        <CardsData
        image={"https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+"}
        heading="Horror Story"
        text="The UN chief added: “This is not fiction or exaggeration. It is what science tells us will result from our current energy policies. We are on a pathway to global warming of more than double the 1.5-degree (Celsius, or 2.7-degrees Fahreinheit) limit” that was agreed in Paris in 2015."
        />
      </div>
    </div>
  );
}


export default Cards;
