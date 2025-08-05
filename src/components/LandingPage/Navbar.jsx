import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ScrollLink to="hero" smooth={true} duration={500} className="navbar-logo">
          Mindrepo
        </ScrollLink>
        <div className="navbar-nav">
          <div className="navbar-links">
            <ScrollLink
              to="how-it-works"
              smooth={true}
              duration={500}
              className="navbar-link"
              activeClass="active"
              spy={true}
              offset={-80}
            >
              How It Works
            </ScrollLink>
            <ScrollLink 
              to="features" 
              smooth={true} 
              duration={500} 
              className="navbar-link"
              activeClass="active"
              spy={true}
              offset={-80}
            >
              Features
            </ScrollLink>
          </div>
          
          <div className="navbar-actions">
            <Link to="/login" className="btn btn-secondary">
              Log In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar