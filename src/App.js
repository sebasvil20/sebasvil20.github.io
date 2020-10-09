import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ListaCertificaciones from "./components/ListaCertificaciones";
import ListaProyectos from "./components/ListaProyectos";
import GithubCard from "./components/GithubCard";
import Footer from "./components/Footer";
import Particles from "react-particles-js";

// href="!#"
function App() {
  return (
    <section className="bg-greenbluecrayola">
      <Particles
        canvasClassName="particulas hidden sm:block"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className="container mx-auto">
        <Header />
        <Hero />
        <ListaCertificaciones />
        <ListaProyectos />
        <GithubCard />
        <Footer />
      </div>
    </section>
  );
}

export default App;
