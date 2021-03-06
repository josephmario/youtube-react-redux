import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const KEY_API = 'AIzaSyCV9mS9q_iCdNsG62buQn0uoZFsHw5U49c';

// const App = function(){

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
     };
     this.videoSearch('React.js');
  }

  videoSearch(term){
    YTSearch({ key: KEY_API, term: term}, (videos) => {
      console.log(videos)
      // this.setState({ videos : videos});
      // or
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
        });
    });
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
