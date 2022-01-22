import Header from "./components/header/index";
import Headline from "./components/headline/index"
import "./App.scss"
function App() {
  return (
    <div className="App">
      <Header/>
      <Headline heading = "Welcome to the posts!"/>
    </div>
  );
}

export default App;
