import Layout from "./components/Composition/Layout";
import About from "./components/Modules/About";
import Projects from "./components/Modules/Projects";
import Skills from "./components/Modules/Skills";
// import Experience from "./components/Modules/Experience";
import Information from "./components/Modules/Information";
import FAQ from "./components/Modules/FAQ";

const App = () => {
  return (
    <main>
      <Layout>
        <About />
        <Projects />
        <Skills />
        <Information />
        <FAQ />
      </Layout>
    </main>
  );
};

export default App;
