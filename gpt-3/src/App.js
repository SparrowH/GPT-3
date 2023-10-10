import React from 'react'
import './App.css'
import { Footer, Blog, Features, Possibility, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        </div>
        <h1>GPT-3</h1>
    </div>
  )
}

export default App