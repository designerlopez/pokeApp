import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (
    <main className='home'>
        <img className='home__img'src="/images/image 11.png" alt="" />
        <h2 className='home__subtitle'>Hi, trainer!</h2>
        <p className='home__text'>Give me your name to begin!</p>
        <FormHome/>




    </main>
  )
}

export default Home