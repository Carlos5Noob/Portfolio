import Layout from "./components/Composition/Layout";
import About from "./components/Modules/About";
import Projects from "./components/Modules/Projects";
import Tools from "./components/Modules/Tools";
import Experience from "./components/Modules/Experience";
import Information from "./components/Modules/Information";

const App = () => {
  return (
    <main>
      <Layout>
        <About />
        <Experience />
        <Projects />
        <Tools />
        <Information />
      </Layout>
    </main>
  );
};

export default App;
