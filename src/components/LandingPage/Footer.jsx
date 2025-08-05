function Footer() {
  return (
    <footer className="footer-section">
      <div className="landing-container">
        <p className="caption text-card-secondary" style={{ marginBottom: 'var(--space-sm)', fontSize: '14px' }}>
          © 2025 Mindrepo. A therapeutic tool for thought exploration.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
          <a href="#" className="caption text-card-secondary" style={{ fontSize: '14px' }}>Privacy Policy</a>
          <a href="#" className="caption text-card-secondary" style={{ fontSize: '14px' }}>Terms of Service</a>
          <a href="#" className="caption text-card-secondary" style={{ fontSize: '14px' }}>GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer