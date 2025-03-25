import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-linear-to-b from-[#0d0d0e] to-[#29292a]">
      <Hero />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
