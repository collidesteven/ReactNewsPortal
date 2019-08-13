import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './styles/styles.css';
import JSON from './db.json';
import NewsList from './components/newsList';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      news: JSON
    }
  }

  render(){

    console.log(this.state.news);

    return(
      <>
      <Header/>
      <NewsList news={this.state.news}/>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
