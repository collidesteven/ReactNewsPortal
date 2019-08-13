import React, { Component } from 'react';

/*let styles= {
  header:{
    background:'#03a9f4'
  },
  logo:{
    color:'#fff',
    fontFamily:'Arial',
    textAlign: 'center'
  }
}*/

class Header extends Component{

  state ={
    keywords:'',
  };


  inputChange(event){
    this.setState({
      keywords: event.target.value
    })

  }



  render(){

    console.log(this.state);

    return(
    <header>
      <div className="logo">Logo</div>
      <input onChange={(event)=>this.inputChange(event)}/>
      <div>{this.state.keywords}</div>
    </header>

  )
}
}

export default Header;
