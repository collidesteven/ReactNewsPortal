import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './styles/styles.css';
import JSON from './db.json';
import NewsList from './components/newsList';
import Footer from './components/footer';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      news: JSON,
      footerText: 'I am the main footer'
    }
  }

  render(){

    console.log(this.state.news);
    const state = this.state;

    return(
      <>
      <Header/>
      <NewsList news={state.news}>
        <br/>
        <h1>I am a Children</h1>
      </NewsList>

      <Footer footerText={state.footerText}/>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
