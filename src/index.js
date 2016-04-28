import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDbXVHNmEHXve9xEiHKo8XKeQQk1TEStmI';

//Create a new component
//To produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Add the HTML Generated Component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
