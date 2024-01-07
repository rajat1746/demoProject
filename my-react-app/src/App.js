import "./App.css";
import Header from "./Components/Header/navbar";
import Carasol from "./Components/Carasol/carasol";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div id='root'>
      <Header />
      <div id='main-content'>
        <Carasol />
      </div>
      <Footer />
    </div>
  );
}

export default App;
