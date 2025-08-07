import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useState, useEffect } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <ScrollLink to="hero" smooth={true} duration={500} offset={-100} className="navbar-logo">
          <img src="/src/assets/images/main/mindrepo-logo.svg" alt="Mindrepo" />
        </ScrollLink>
        <div className="navbar-nav">
          
          <div className="navbar-actions">
            <Link to="/login" className={`btn btn-secondary ${!isScrolled ? 'btn-transparent' : ''}`} style={{color: isScrolled ? 'var(--color-secondary)' : 'var(--color-primary)'}}>
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