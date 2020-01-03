import React from "react";
import Contacts from "./component/contacts/Contacts";
import Header from "./component/layout/Header";
import AddContact from "./component/contacts/AddContact";
import EditContact from "./component/contacts/EditContact";
import About from "./component/pages/About";
import NotFound from "./component/pages/NotFound";
import Test from "./component/test/Test";
import { Provider } from "./context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
