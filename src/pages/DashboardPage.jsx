import { Link } from 'react-router-dom'

function DashboardPage() {
  // Mock repository data
  const repositories = [
    {
      id: 1,
      title: "Work Anxiety Thoughts",
      created: "2024-12-15",
      lastSaved: "2 hours ago",
      nodeCount: 12,
      connectionCount: 8
    },
    {
      id: 2,
      title: "Social Situations",
      created: "2024-12-10",
      lastSaved: "1 day ago",
      nodeCount: 7,
      connectionCount: 5
    },
    {
      id: 3,
      title: "Future Planning Worries",
      created: "2024-12-08",
      lastSaved: "3 days ago",
      nodeCount: 15,
      connectionCount: 11
    }
  ]

  const EmptyState = () => (
    <div className="text-center py-3xl">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-xl flex items-center justify-center">
          <span className="text-3xl">🌱</span>
        </div>
        <h2 className="h2 mb-md">Your first mind repository awaits</h2>
        <p className="body mb-xl text-secondary">
          Create a private space to explore and organize your thoughts. Each repository is like a digital canvas for mapping your mental patterns.
        </p>
        <Link to="/repository/new" className="btn btn-primary">
          Create Your First Repository
        </Link>
      </div>
    </div>
  )

  const RepositoryCard = ({ repo }) => (
    <Link to={`/repository/${repo.id}`} className="card card-hover block">
      <h3 className="h3 mb-sm">{repo.title}</h3>
      <div className="space-y-xs mb-md">
        <p className="caption text-secondary">Created: {repo.created}</p>
        <p className="caption text-secondary">Last saved: {repo.lastSaved}</p>
      </div>
      <div className="flex items-center gap-md">
        <span className="caption text-secondary">
          {repo.nodeCount} thoughts
        </span>
        <span className="caption text-secondary">•</span>
        <span className="caption text-secondary">
          {repo.connectionCount} connections
        </span>
      </div>
    </Link>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200" style={{ height: '64px' }}>
        <div className="container mx-auto px-lg h-full flex items-center justify-between">
          <div className="flex items-center gap-lg">
            <Link to="/" className="flex items-center gap-sm">
              <span className="h2 text-primary mb-0">Mindrepo</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-md">
            <Link to="/repository/new" className="btn btn-primary">
              Create Repository
            </Link>
            <div className="flex items-center gap-sm">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
              <span className="body">User Name</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-lg py-lg">
        {/* Welcome Section */}
        <div className="mb-2xl">
          <h1 className="h1 mb-sm">Welcome back to your thought space</h1>
          <p className="body-large text-secondary">
            Explore your mind repositories and continue organizing your thoughts in a calming, structured way.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl">
          <div className="card text-center">
            <div className="text-2xl font-medium text-primary mb-xs">3</div>
            <p className="caption text-secondary">Active Repositories</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-medium text-primary mb-xs">34</div>
            <p className="caption text-secondary">Total Thoughts</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-medium text-primary mb-xs">24</div>
            <p className="caption text-secondary">Connections Made</p>
          </div>
        </div>

        {/* Repository Grid */}
        {repositories.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-xl">
              <h2 className="h2">Your Mind Repositories</h2>
              <Link to="/repository/new" className="btn btn-secondary">
                + New Repository
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {repositories.map((repo) => (
                <RepositoryCard key={repo.id} repo={repo} />
              ))}
            </div>

            {/* Recent Activity */}
            <div className="mt-2xl">
              <h2 className="h2 mb-xl">Recent Activity</h2>
              <div className="card">
                <div className="space-y-md">
                  <div className="flex items-center gap-md pb-md border-b border-gray-200">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <p className="body mb-xs">Added new evidence node to "Work Anxiety Thoughts"</p>
                      <p className="caption text-secondary">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-md pb-md border-b border-gray-200">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <div className="flex-1">
                      <p className="body mb-xs">Created alternative thought in "Social Situations"</p>
                      <p className="caption text-secondary">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-md">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="body mb-xs">Started new repository "Future Planning Worries"</p>
                      <p className="caption text-secondary">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmptyState />
        )}

        {/* Helpful Tips */}
        <div className="mt-2xl">
          <div className="card bg-secondary">
            <h3 className="h3 mb-md">💡 Gentle Reminder</h3>
            <p className="body mb-md">
              Remember, there's no rush in exploring your thoughts. Each repository is a safe space where you can take your time to understand patterns and discover new perspectives.
            </p>
            <div className="flex flex-wrap gap-sm">
              <span className="px-sm py-xs bg-white rounded-sm caption">Take breaks when needed</span>
              <span className="px-sm py-xs bg-white rounded-sm caption">Progress over perfection</span>
              <span className="px-sm py-xs bg-white rounded-sm caption">Be kind to yourself</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage