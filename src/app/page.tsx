import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function Home() {
  /*
  TODO:
  - technologies and tools footer
  */
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
