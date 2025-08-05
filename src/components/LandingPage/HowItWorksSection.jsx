import { Element } from 'react-scroll'

function HowItWorksSection() {
  return (
    <Element name="how-it-works" className="landing-section">
      <div className="landing-container">
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: 'var(--space-md)', fontSize: '28px', color: '#FFFFFF' }}>
          How It Works
        </h2>
        <p className="body" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--space-2xl)', fontSize: '18px', color: '#F8F9FA' }}>
          From overwhelming thoughts to clear insights, in three simple steps.
        </p>
        
        <div className="how-it-works-grid">
          <div className="card how-it-works-step">
            <div className="step-icon core-thought">
              💭
            </div>
            <h3 className="h3 text-card-primary" style={{ marginBottom: 'var(--space-sm)' }}>Capture</h3>
            <p className="body text-card-secondary" style={{ fontSize: '15px' }}>
              Start with a core thought. Write it down in a safe, pressure-free environment using our central thought node.
            </p>
          </div>
          
          <div className="card how-it-works-step">
            <div className="step-icon evidence">
              🔍
            </div>
            <h3 className="h3 text-card-primary" style={{ marginBottom: 'var(--space-sm)' }}>Explore</h3>
            <p className="body text-card-secondary" style={{ fontSize: '15px' }}>
              Connect evidence for and against your thought. Gently examine what supports 
              and challenges your perspective.
            </p>
          </div>
          
          <div className="card how-it-works-step">
            <div className="step-icon alternative">
              ✨
            </div>
            <h3 className="h3 text-card-primary" style={{ marginBottom: 'var(--space-sm)' }}>Reframe</h3>
            <p className="body text-card-secondary" style={{ fontSize: '15px' }}>
              Discover balanced alternatives. Create new thought nodes that offer more helpful 
              and realistic perspectives.
            </p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default HowItWorksSection