import Layout from "./components/Layout";
import About from "./components/About";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

const App = () => {
  return (
    <main>
      <Layout>
        <About />
        <Projects />
        <Tools />
      </Layout>
    </main>
  );
}

export default App;
