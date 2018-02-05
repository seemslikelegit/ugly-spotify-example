import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { name } = this.props
    let styles = {
      backgroundColor: "#222",
      color: "magenta"
    }
    return (
      <header style={styles}>
        <h1>Welcome to our super-spotify-app, {name}</h1>
      </header>
    );
  }
}

export default UserProfile;