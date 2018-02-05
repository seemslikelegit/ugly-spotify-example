import React, { Component } from 'react';

class UserPlayListsFilter extends Component {
  render() {
    const {updateSearch, search} = this.props
    let styles = {
      display: "flex",
      justifyContent: "space-around",
      margin: "1em"
    }
    return (
      <div style={styles}>
        <p> Search your favourite music: </p>
        <h3>{search} </h3>
        <input type="text" onKeyUp={updateSearch} placeholder="type something"></input>
      </div> 
    );
  }
}

export default UserPlayListsFilter;