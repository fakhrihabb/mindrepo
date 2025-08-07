import { Element } from 'react-scroll'

function FeaturesSection() {
  return (
    <Element name="features" className="landing-section bg-secondary">
      <div className="landing-container">
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: 'var(--space-md)', fontSize: '28px', color: 'var(--color-text-green)', }}>
          Features & Benefits
        </h2>
        <p className="body" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--space-2xl)', fontSize: '18px', color: 'var(--color-text-green-secondary)', }}>
          Everything you need for a clearer, more organized mind.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="h3 text-card-primary" style={{ marginBottom: 'var(--space-md)' }}>
                An Infinite, Private Space
              </h3>
              <p className="body text-card-secondary" style={{ marginBottom: 'var(--space-md)', fontSize: '15px' }}>
                Your Mind Canvas provides unlimited space for thought exploration. Pan, zoom, and organize 
                your thoughts exactly as you need, with complete privacy and control.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Unlimited canvas space for complex thought patterns</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Zoom and pan controls for detailed exploration</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Complete privacy - your thoughts stay with you</span>
                </li>
              </ul>
            </div>
            <div className="feature-image-placeholder">
              <span>Image Placeholder</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="h3 text-card-primary" style={{ marginBottom: 'var(--space-md)' }}>
                Build Your Mental Library
              </h3>
              <p className="body text-card-secondary" style={{ marginBottom: 'var(--space-md)', fontSize: '15px' }}>
                Create multiple repositories for different aspects of your mental wellness. Each repository 
                is a dedicated space for exploring specific thoughts or patterns.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Multiple repositories for different thought categories</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Auto-save functionality - never lose your progress</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Designed for intuitive use, letting you focus on your thoughts, not the tool.</span>
                </li>
              </ul>
            </div>
            <div className="feature-image-placeholder">
              <span>Image Placeholder</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="h3 text-card-primary" style={{ marginBottom: 'var(--space-md)' }}>
                Grounded in Science
              </h3>
              <p className="body text-card-secondary" style={{ marginBottom: 'var(--space-md)', fontSize: '15px' }}>
                Built on proven Cognitive Behavioral Therapy principles, but designed to feel approachable 
                and non-intimidating. Evidence-based wellness without the clinical feel.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>CBT-based thought exploration techniques</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Gentle, supportive language throughout</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>No pressure - explore at your own pace</span>
                </li>
              </ul>
            </div>
            <div className="feature-image-placeholder">
              <span>Image Placeholder</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="h3 text-card-primary" style={{ marginBottom: 'var(--space-md)' }}>
                A Guided, Yet Flexible Process
              </h3>
              <p className="body text-card-secondary" style={{ marginBottom: 'var(--space-md)', fontSize: '15px' }}>
                Mindrepo provides a supportive structure for your thought exercises without locking you into a rigid format. You are always in control of your journey.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Gentle prompts to help you explore your thoughts deeper</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Freely organize your canvas in a way that makes sense to you</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">•</span>
                  <span className="caption text-card-secondary" style={{ fontSize: '14px' }}>Full control to edit, connect, and reframe ideas at any time</span>
                </li>
              </ul>
            </div>
            <div className="feature-image-placeholder">
              <span>Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default FeaturesSection