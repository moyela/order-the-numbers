import "./App.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./routes/Game/Game";
import Intro from "./routes/Intro/Intro";

const FallBack = () => {
  return (
    <div>
      <p>Loading Screen</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<FallBack />}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
