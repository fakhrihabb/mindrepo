import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
import { useState, useEffect } from 'react'
import AudioWave from './AudioWave'

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Element name="hero" className="hero-section">
      <div className="landing-container">
        <div style={{ position: 'relative' }}>
          <img 
            src="/src/assets/images/main/mindrepo-icon.svg" 
            alt="Mindrepo Icon"
            className={`hero-icon ${isScrolled ? 'hero-icon-hidden' : ''}`}
          />
          <AudioWave />
          <h1 className="hero-title " style={{ position: 'relative', zIndex: 2 }}>
            Deconstruct Your Thoughts. Rebuild Your Peace.
          </h1>
        </div>
        <p className="hero-subtitle">
          Transform overwhelming feelings into organized, manageable insights through CBT-based mind mapping.
        </p>
        
        <div className="hero-visual">
          <div className="hero-visual-content">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                backgroundColor: 'var(--color-secondary)', 
                border: '3px solid var(--color-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                textAlign: 'center',
                padding: '10px'
              }}>
                Core Negative Thought
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ 
                  width: '100px', 
                  height: '60px', 
                  backgroundColor: 'var(--color-warning)', 
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  Evidence For
                </div>
                <div style={{ 
                  width: '100px', 
                  height: '60px', 
                  backgroundColor: 'var(--color-success)', 
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  Evidence Against
                </div>
              </div>
              <div style={{ 
                width: '140px', 
                height: '80px', 
                backgroundColor: 'var(--color-alternative)', 
                border: '1px solid var(--color-accent)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                textAlign: 'center',
                padding: '10px'
              }}>
                Alternative Thought
              </div>
            </div>
            <p className="text-card-secondary" style={{ marginTop: '20px', fontSize: '14px' }}>
              Interactive Mind Canvas Preview
            </p>
          </div>
        </div>
        
        {/* <Link to="/signup" className="btn btn-primary" style={{ fontSize: '16px', padding: '12px 32px' }}>
          Create Your First Repository
        </Link> */}
      </div>
    </Element>
  )
}

export default HeroSection