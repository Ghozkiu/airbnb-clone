import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./Data";

function App() {
  const cardsElements = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="flex md:justify-evenly flex-nowrap gap-5 overflow-x-auto">
        {cardsElements}
      </section>
    </div>
  );
}

export default App;
