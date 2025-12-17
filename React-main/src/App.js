import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Impact from "./components/Impact";
import Happening from "./components/Happening";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate"; // optional, if you keep it
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import CartAndStore from "./components/CartAndStore";

import GivePage from "./pages/GivePage"; // ✅ import your GivePage
import TeamPage from "./pages/TeamPage";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Mission />
                <Impact />
                <Happening />
                <Events />
                <Gallery />
                <CartAndStore />
                <Donate /> {/* optional Donate section */}
              </>
            }
          />
          <Route path="/give" element={<GivePage />} /> {/* Give page */}
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </main>
      <Footer />
      <CartButton />
    </div>
  );
}

export default App;
