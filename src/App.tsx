import Layout from "./components/Layout";
import About from "./components/About";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Information from "./components/Information";

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
}

export default App;
