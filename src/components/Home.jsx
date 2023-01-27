import React from 'react'
import '../styles/Home.scss'
import vg from '../assets/2.webp'

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
