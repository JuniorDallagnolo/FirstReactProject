import React, { Component } from "react";
import { Jumbotron, Button, NavLink } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">First React Project AJAX</h1>
        <p className="lead">
          You can navigate through Users and their posts and to-dos
        </p>
        <Button outline color="primary">
          <NavLink href="/">Home</NavLink>
        </Button>
      </Jumbotron>
    );
  }
}
