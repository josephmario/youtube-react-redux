import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const KEY_API = 'AIzaSyCV9mS9q_iCdNsG62buQn0uoZFsHw5U49c';

YTSearch({ key: KEY_API, term: 'react.js'}, function(data){
  console.log(data)
});

// const App = function(){

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
