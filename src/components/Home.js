import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import UserCard from "./UserCard";
import loader from "../loader.svg";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      users: []
    };
  }

  componentDidMount = () => {
    console.log(this.state);
    if (this.state.users.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(json => {
          //Checking if you got and Object and it's not empty
          if (typeof json === "object" && !isEmpty(json)) {
            setTimeout(() => {
              this.setState({
                isLoading: false,
                users: json
              });
            }, 1000);
          } else {
            throw new Error("The Json had corrupted data");
          }
        })
        .catch(err => {
          this.setState({
            error: err
          });
          console.log(err);
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  };

  render() {
    return (
      <Container className="pr-0">
        <h5 className="text-center">
          <u>List of Users</u>
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
            {this.state.users.map(item => {
              return <UserCard key={item.id} item={item} />;
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
