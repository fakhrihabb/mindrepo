import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="pt-xl pb-lg">
        <div className="container mx-auto px-lg">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <h1 className="h2 mb-xs">Mindrepo</h1>
              <p className="caption">Your thoughts, organized</p>
            </div>
            <div className="flex gap-md">
              <Link to="/login" className="btn btn-secondary text-white border-white hover:bg-white hover:text-primary">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pb-3xl">
        <div className="container mx-auto px-lg text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white mb-xl" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              A calming space to explore and organize your thoughts
            </h1>
            <p className="text-white body-large mb-2xl opacity-90 max-w-2xl mx-auto">
              Mindrepo provides a gentle, non-clinical environment where you can visually map your thoughts, 
              challenge negative patterns, and discover new perspectives through structured thought exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center mb-3xl">
              <Link to="/signup" className="btn btn-primary text-lg px-xl py-md">
                Create Your First Repository
              </Link>
              <Link to="/login" className="btn btn-secondary text-white border-white hover:bg-white hover:text-primary text-lg px-xl py-md">
                Sign In
              </Link>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="max-w-6xl mx-auto">
            <div className="card bg-secondary p-2xl mb-2xl">
              <h2 className="h2 mb-lg text-center">Visual Thought Organization</h2>
              <div className="grid md:grid-cols-3 gap-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-warning rounded-lg mx-auto mb-md flex items-center justify-center">
                    <span className="text-lg">💭</span>
                  </div>
                  <h3 className="h3 mb-sm">Capture Thoughts</h3>
                  <p className="caption">
                    Write down worrying thoughts in a pressure-free environment
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-success rounded-lg mx-auto mb-md flex items-center justify-center">
                    <span className="text-lg">🔍</span>
                  </div>
                  <h3 className="h3 mb-sm">Explore Evidence</h3>
                  <p className="caption">
                    Gently examine evidence for and against your thoughts
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-alternative rounded-lg mx-auto mb-md flex items-center justify-center">
                    <span className="text-lg">✨</span>
                  </div>
                  <h3 className="h3 mb-sm">Discover Alternatives</h3>
                  <p className="caption">
                    Find more balanced and helpful ways of thinking
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-2 gap-xl mb-2xl">
              <div className="card bg-white text-left">
                <h3 className="h3 mb-md">Familiar Developer Metaphor</h3>
                <p className="body mb-md">
                  Think of your mind as repositories of thoughts. Each repository is a safe space 
                  to explore specific worries or thought patterns.
                </p>
                <ul className="list-none space-y-sm">
                  <li className="flex items-start gap-sm">
                    <span className="text-accent">•</span>
                    <span className="caption">Create multiple thought repositories</span>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="text-accent">•</span>
                    <span className="caption">Version control for your mental patterns</span>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="text-accent">•</span>
                    <span className="caption">Save and revisit your progress</span>
                  </li>
                </ul>
              </div>
              <div className="card bg-white text-left">
                <h3 className="h3 mb-md">Therapeutic Without Clinical Feel</h3>
                <p className="body mb-md">
                  Built on Cognitive Behavioral Therapy principles, but designed to feel 
                  approachable and non-intimidating.
                </p>
                <ul className="list-none space-y-sm">
                  <li className="flex items-start gap-sm">
                    <span className="text-accent">•</span>
                    <span className="caption">Visual mind mapping interface</span>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="text-accent">•</span>
                    <span className="caption">Gentle, supportive language</span>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="text-accent">•</span>
                    <span className="caption">No pressure, just exploration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card bg-accent text-center p-2xl">
              <h2 className="h2 text-white mb-md">Ready to start exploring?</h2>
              <p className="body-large text-white mb-xl opacity-90">
                Your first mind repository awaits - a private space to explore and organize your thoughts.
              </p>
              <Link to="/signup" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-xl py-md">
                Create Your Account
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-xl border-t border-white border-opacity-20">
        <div className="container mx-auto px-lg text-center">
          <p className="text-white opacity-70 caption">
            © 2025 Mindrepo. A therapeutic tool for thought exploration.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage