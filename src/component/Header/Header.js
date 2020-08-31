import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state ={
      datamenu:[]
    }
  }
  componentDidMount(){
    fetch('http://localhost:8000/api/menu')
    .then(res =>{
      console.log('res la gi:',res);
      return res.json()})
    .then(data =>{
      console.log('datamenu:',data);
      this.setState({
        datamenu: data
      })
    }).catch(err =>{
      console.log('sai roi');
    })
  }

    render() {
        return (
            <div>
      <div className="top-menu-bottom932">
        <nav className="navbar navbar-default">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              <a className="navbar-brand" href="#"><img src="image/logo.png" alt="Logo" /></a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav"> </ul>
              <ul className="nav navbar-nav navbar-right">
                {this.state.datamenu.map((iteam,id) =>{
                  return <li key ={id}><Link to ={iteam.route}>{iteam.name}</Link></li>
                })}
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container-fluid */}
        </nav>
      </div>
  
  

            </div>
        );
    }
}

export default Header;