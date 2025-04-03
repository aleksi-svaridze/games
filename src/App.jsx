import Games from "./components/Games";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";

function App() {
  return (
    <div className="bg-linear-to-b from-[#0d0d0e] to-[#29292a]">
      <Hero />
      <Games />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
