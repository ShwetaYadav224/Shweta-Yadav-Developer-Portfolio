import { ThemeProvider } from "./components/theme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Education } from "./sections/Education";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { profile } from "./config/portfolio";

function App() {
  return (
    <ThemeProvider>
      <main className="relative min-h-dvh pb-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-14 px-4 pt-12 sm:pt-14 md:pt-16">
          <Hero />
          <About />
          <Work />
          <Education />
          <Skills />
          <Projects />
          <Contact />

          <footer className="pb-2 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with React &
            Tailwind CSS.
          </footer>
        </div>
      </main>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
