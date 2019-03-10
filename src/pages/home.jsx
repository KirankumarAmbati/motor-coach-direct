import React, { Component } from 'react'
import Benefits from '../components/benefits'
import Header from '../components/header'
import Footer from '../components/footer'
import Bar from '../components/bar'
import logo from '../img/logo.png'
import liberty from '../img/motorcoach-direct/Liberty-Coach.jpg'

class Home extends Component {  

  render() {
    return (
      <div >
        <Bar />
        <Header headerImage={logo} />
        <Benefits />
        <Footer />
      </div>
    );
  }
}
  
export default Home;