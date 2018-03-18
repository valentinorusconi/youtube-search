import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';
const API_KEY = 'AIzaSyB2Fy0irdVm4Mm_HBJZTX3QObEF1C9g4uc';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('surfboards')
    }

    videoSearch(term){
        YTSearch({key: API_KEY,term: term}, (videos) => {
        this.setState({ 
          videos,
          selectedVideo: videos[0]
        })
      })
    }
  
  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)},500)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      </div> 
    );
  }
}

export default App;


