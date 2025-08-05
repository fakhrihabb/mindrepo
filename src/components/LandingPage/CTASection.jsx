import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="final-cta-section">
      <div className="landing-container">
        <h2 className="h2 final-cta-title">
          Ready to See Your Thoughts Differently?
        </h2>
        <p className="final-cta-subtitle">
          Join developers who are taking a proactive approach to mental wellness. 
          Your first mind repository is just a click away.
        </p>
        <Link to="/signup" className="btn btn-primary" style={{ fontSize: '16px', padding: '12px 32px' }}>
          Create Your First Repository
        </Link>
      </div>
    </section>
  )
}

export default CTASection