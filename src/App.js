import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import My_projects from "./components/My_projects";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        <div className="my_portfolio">
          <Header />
          <switch>
            <Route exact path="/" component={AboutMe}/>
              <Route exact path="/My_projects" component={My_projects}/>
              <Route exact path="/Contacts" component={Contacts}/>
          </switch>
        </div>
        <Footer />
      </Router>
  );
}


export default App;
