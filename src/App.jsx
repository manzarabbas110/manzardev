import React from 'react'
import Header from './Components/Header/Header'
import HeroSection from './Components/Herosection/Herosecttion'
import './App.css'
import AboutMe  from './Components/AboutMe/Aboutme'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/Mywork'
import Form from './Components/Form/Forms'

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
        <div className='about-me-main'>
          <AboutMe />
        </div>
        <Services />
        <MyWork />
        <Form />
      </div>
    </div>
  )
}

export default App