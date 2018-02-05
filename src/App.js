import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile'
import UserPlaylistsInfo from './components/UserPlaylistsInfo'
import UserPlayListsFilter from './components/UserPlaylistsFilter'
import UserPlayListProfile from './components/UserPlayListProfile'
class App extends Component {
  componentWillMount() {
    this.setState({})
  }
  updateSearch(e) {
    this.setState({search:e.target.value})
  }
  render() {
    const user = {
      name: 'Roma',
      age: 'too old'
    }
    const playlistsInfo = {
      playListsCount: 48,
      hoursListened: '3693'
    }
    const playLists = [{
      source: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
      name: "80's music",
      topSongs: [
        {
          name: 'random1'
        },
        {
          name: 'random2'
        },
        {
          name: 'random3'
        }
      ]
    },
    {
      source: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
      name: "80's music",
      topSongs: [
        {
          name: 'random4'
        },
        {
          name: 'random5'
        },
        {
          name: 'random6'
        }
      ]
    },
    {
      source: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
      name: "80's music",
      topSongs: [
        {
          name: 'random7'
        },
        {
          name: 'random8'
        },
        {
          name: 'random9'
        }
      ]
    }
  ]
    const wrapperStyle= {
      display: 'flex'
    }
    return (
      <div className="App">
        <UserProfile {...user}/>
        <UserPlaylistsInfo {...playlistsInfo}/>
        <UserPlayListsFilter search={this.state.search} updateSearch={this.updateSearch.bind(this)}/>
        <div style={wrapperStyle}>
          {playLists.map(playlist => <UserPlayListProfile musicProfile={playlist}/> )}
          
          </div>
      </div>
    );
  }
}

export default App;
