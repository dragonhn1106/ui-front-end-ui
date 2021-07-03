import "./App.css";
import Header from "./common/header";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import AddItemPage from "./pages/add-items";
const BoxContentBody = styled.div`
  min-height: 300px;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <BoxContentBody>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add-item">
              <AddItemPage />
            </Route>
          </Switch>
        </BoxContentBody>
      </Router>
    </div>
  );
}

export default App;
