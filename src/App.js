import "./App.css";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import Bootcamp from "./Components/Bootcamp";
import Training from "./Components/Training";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Categories/>
      <Bootcamp/>
      <Training/>
      <Footer/>
    </div>
  );
}
export default App;
