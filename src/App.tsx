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
      <main className="relative min-h-dvh pb-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
          <Hero />
          <About />
          <Work />
          <Education />
          <Skills />
          <Projects />
          <Contact />

          <footer className="pt-4 text-center text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} {profile.name}. Built with React &
            Tailwind CSS.
          </footer>
        </div>

        <Navbar />
      </main>
    </ThemeProvider>
  );
}

export default App;
