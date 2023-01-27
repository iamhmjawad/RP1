import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
      <h1>TechStar.</h1>
      <main>
        {/* can or cannot use curly braces. Upto you */}
        {/* Link tag is similar to a tag. Don't worry */}
        <HashLink to={'/#home'}>Home</HashLink>
        <Link to={'/contact'}>Contact</Link>
        <HashLink to={'/#about'}>About</HashLink>
        <HashLink to={'/#brands'}>Brands</HashLink>
        <Link to='/services'>Services</Link>
      </main>
    </nav>
  )
}

export default Header
