import Nav from './components/Nav'
import Hero from './components/Hero'
import Practice from './components/Practice'
import Projects from './components/Projects'
import About from './components/About'
// import Tools from './components/Tools'
import Contact from './components/Contact'
import ExploreWork from './components/ExploreWork'
import { CONTACT } from './data'
import { BsWhatsapp } from "react-icons/bs";

export default function App() {
  const currentPath = window.location.pathname
    .replace(/\/+$/, "")
    .toLowerCase();

  if (currentPath === "/explorework") {
    return <ExploreWork />;
  }
  return (
    <>
      <Nav />
      <Hero />
      <Practice />
      <Projects />
      <About />
      {/* <Tools /> */}
      <Contact />

      <footer className="max-w-6xl mx-auto px-6 py-10 text-xs flex justify-around  text-muted border-t border-line">
        <span>Leolight · Solar Engineer</span>
        <p>Independent solar engineering · Awka, Nigeria</p>
        <p>© {new Date().getFullYear()} Leo Light</p>
      </footer>

      <a
        href={CONTACT.whatsapp}
        aria-label="Chat on WhatsApp"
        className="fixed flex items-center gap-2 right-5 bottom-5 px-4 py-3 rounded-lg text-lg font-semibold shadow-lg bg-green-500 text-white hover:bg-green-600 transition"
      >
        <BsWhatsapp />
        Chat on WhatsApp
      </a>
    </>
  );
}
