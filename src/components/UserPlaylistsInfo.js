import React, { Component } from 'react';

class UserPlaylistsInfo extends Component {
  render() {
    const {playListsCount, hoursListened} = this.props
    let styles = {
      display: "flex",
      justifyContent: "space-around",
      margin: "1em"
    }
    return (
      <div style={styles}>
        <div>
          <span>{playListsCount}</span> playlists
        </div>
        <div>
          <span>{hoursListened}</span> hours
        </div>
      </div>
    );
  }
}

export default UserPlaylistsInfo;