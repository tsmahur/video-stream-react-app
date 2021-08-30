import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PageNotFound from "./components/PageNotFound"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Player from './components/Player';
function App(props) {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>

          <Route exact path="/" render={() => (<Redirect to="/home" />)}></Route>
          <Route exact path="/home" >
            <Home />
          </Route>

          {/* <Route exact path="/video/:title" render={({match})=>{
          // {console.log(match)}
          // <Player title={match.params.title}/>
          console.log("inside router /video")
          }} >
            {console.log("sdsd")}
          </Route> */}

          <Route exact path="/video/:id" >
            <Player/>
          </Route>
          <Route >
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
