import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Contact from './components/Contact';
import './App.css';
const store = require('./reducer').init();
class App extends Component {
render() {
return (
<Provider store={store}>
<BrowserRouter>
<div className='App'>
<div className='container'>
<Route exact path='/' component={Contact} />
</div>
</div>
</BrowserRouter>
</Provider>
);
}
}
export default App;