
import Main2Data from "./Main2Data";
import "./Main2Styles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>What is carbon footprint ?</h1>
      <p>A carbon footprint is defined as the total amount of greenhouse gases emitted into the atmosphere, such as carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), hydrofluorocarbons (HFCs), expressed in equivalent tons of CO2. It is associated with the activities of an individual, a community, an organisation, a process, a product or service, or an event, among other things.</p>
      <Main2Data
      className="first-des"
      heading="Why calculate ?"
      text="Calculating your carbon footprint offers a way to reduce costs and improve sustainability. Climate change threatens the lives and livelihoods of people everywhere so by doing a carbon footprint and taking action, you will also be playing your part to reduce global emissions.

      A carbon footprint assessment is a way of measuring the environmental impact of your business activities, particularly in terms of greenhouse gas emissions."
      img1={"https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_90495476_Full.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0"}
      img2={"https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_84571903_Full.jpg?crop=122%2C0%2C2254%2C1691&wid=820&hei=615&scl=2.7495934959349593"}

      />

<Main2Data
className="first-des-reverse"
      heading="Urban Issue"
      text="An increasing share of emissions can be attributed to towns and cities, the report's authors continued, adding just as worryingly, that emissions reductions clawed back in the last decade or so “have been less than emissions increases, from rising global activity levels in industry, energy supply, transport, agriculture and buildings”."
      img1={"https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      img2={"https://images.unsplash.com/photo-1611174797252-415c154eff88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

      />
    </div>
  );
};

export default Destination;
