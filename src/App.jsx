import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Sidenav from "./components/Sidenav";

class App extends Component {
  state = { user: null };
  login = user => {
    this.setState({ user }, _ => this.props.history.push("/books"));
  };
  logout = _ => {
    this.setState({ user: null }, _ => this.props.history.push("/"));
  };
  render() {
    const { books, topics } = this.props;
    const { user } = this.state;

    return (
      <div className="app">
        <Toolbar user={user} />
        <Content>
          <Route
            path="/books"
            render={props => <Sidenav topics={topics} {...props} />}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/login"
              render={props => <Login {...props} onLogin={this.login} />}
            />
            <Route
              path="/logout"
              render={props => <Logout {...props} onLogout={this.logout} />}
            />
            <PrivateRoute
              exact
              path="/books/:topic?"
              component={Books}
              data={books}
              user={user}
            />
            <PrivateRoute
              path="/books/:topic/:book"
              component={Book}
              data={books}
              user={user}
            />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default withRouter(App);