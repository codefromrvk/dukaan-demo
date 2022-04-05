import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Options from "./Components/Options/Options";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Options />
      <Products />
      <Footer />
    </div>
  );
}
