import React, { Component } from 'react';

class UserPlayListProfile extends Component {
  render() {
    const {musicProfile} = this.props
    let styles = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black"
    }
    let imageStyles = {
      width: '150px',
      height: '150px'
    }
    return (
      <div style={styles}>
        <img style={imageStyles} src={ musicProfile.source}></img>
        <h2> {musicProfile.name} </h2>
        <ul> 
          {  musicProfile && musicProfile.topSongs.map((s,i) => {
               return <li key={i+s.name}> {s.name} </li> 
          })
          }
        </ul>
      </div>
    );
  }
}


export default UserPlayListProfile;