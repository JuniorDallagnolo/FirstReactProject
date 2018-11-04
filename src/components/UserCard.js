import React, { Component, Fragment } from "react";
import { NavLink, Col, Card, Button, CardTitle, CardText } from "reactstrap";

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      username: this.props.item.username,
      email: this.props.item.email
    };
  }
  render() {
    return (
      <Fragment>
        <Col sm="6">
          <Card body>
            <CardTitle>{this.state.username}</CardTitle>
            <CardText>From {this.state.email}</CardText>
            <Button outline color="secondary">
              <NavLink href={`${this.state.id}/posts`} active>
                Check Posts
              </NavLink>
            </Button>
            <br />
            <Button outline color="secondary">
              <NavLink href={`${this.state.id}/todos`} active>
                Check todos
              </NavLink>
            </Button>
          </Card>
        </Col>
      </Fragment>
    );
  }
}
