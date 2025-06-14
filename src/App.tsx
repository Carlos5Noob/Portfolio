import Layout from "./components/Layout";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Layout>
        <About />
        <Projects />
      </Layout>
    </>
  );
}

export default App;
