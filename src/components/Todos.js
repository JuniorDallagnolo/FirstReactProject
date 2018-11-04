import React, { Component, Fragment } from "react";
import { Row, Container, Col, Card, CardTitle, Progress } from "reactstrap";
import loader from "../loader.svg";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      id: this.props.match.params.userID,
      todos: []
    };
  }

  componentDidMount = () => {
    console.log(this.props);
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}/todos`)
      .then(response => response.json())
      .then(json => {
        //Checking if you got and Object and it's not empty
        if (typeof json === "object" && !isEmpty(json)) {
          setTimeout(() => {
            this.setState({ isLoading: false, todos: json });
          }, 1000);
        } else {
          throw new Error("The Json had corrupted data");
        }
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="pr-0">
        <h5 className="text-center">
          <u>List of To-dos</u>
        </h5>
        {this.state.error && (
          <p>
            OH NOES Something went wrong, please try turning your Computer off,
            then on. I'm kidding check the CONSOLE for more information
          </p>
        )}
        {this.state.isLoading &&
          !this.state.error && (
            <img src={loader} className="LazyLoader" alt="logo" />
          )}
        {!this.state.isLoading && (
          <Row>
            {this.state.todos.map(item => {
              item.progress = Math.floor(Math.random() * 100);
              return (
                <Col sm="6" key={item.id}>
                  <Card body>
                    <CardTitle>Title: {item.title}</CardTitle>
                    {item.completed && (
                      <Fragment>
                        <div>Done</div>
                        <Progress color="success" value="100" />
                      </Fragment>
                    )}
                    {!item.completed && (
                      <Fragment>
                        <div>{item.progress}</div>
                        <Progress color="primary" value={item.progress} />
                      </Fragment>
                    )}
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    );
  }
}
//Function that checks if an object is not empty
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
