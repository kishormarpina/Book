import React from 'react';
import BookList from './components/BookList';
import AddBook from './AddComponents/AddBook';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <switch>
          <Route path = '/' component={BookList} exact />
          <Route path = '/' component={AddBook} />
        </switch>
      </Router>
    </main>
    
  )
}
export default App;
