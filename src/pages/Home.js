import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <Card/>
      <Footer/>
    </React.Fragment>
  )
}

export default Home;
