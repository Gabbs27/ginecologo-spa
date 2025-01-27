import React from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
