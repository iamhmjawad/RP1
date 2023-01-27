import React from 'react'
import '../styles/Home.scss'
import vg from '../assets/2.webp'
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your tech needs</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            We are your one stop solution for all your tech needs. We provide
            you with the best services at the best prices. We are a team of
            highly skilled and experienced professionals.
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            We are a team of dedicated technology enthusiasts who are passionate
            about solving all kinds of tech problems. Our goal is to help
            individuals, small businesses and large organizations navigate the
            ever-evolving world of technology with ease and confidence. Our
            company was founded with the mission to make technology accessible
            and easy to understand for everyone. We believe that technology
            should be a tool to enhance people's lives and businesses, not a
            source of frustration and confusion. Our team is made up of experts
            in various fields of technology, including software development,
            network engineering, cybersecurity, and more. We have a diverse set
            of skills and experience that allows us to tackle any tech problem
            that comes our way. We pride ourselves on our commitment to customer
            service and satisfaction. We understand that technology issues can
            be stressful, so we work quickly and efficiently to resolve problems
            and provide clear and concise solutions.
          </p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: '0.3s',
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: '0.5s',
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: '0.7s',
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: '1s',
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
