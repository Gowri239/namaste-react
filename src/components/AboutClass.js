import React from "react";
import UserContext from "../utils/useContext";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserCard;
