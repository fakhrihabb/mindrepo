import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-lg">
      <div className="card bg-white max-w-md w-full p-xl">
        {/* Logo/Brand */}
        <div className="text-center mb-2xl">
          <h1 className="h2 text-primary mb-xs">Mindrepo</h1>
          <p className="caption">Welcome back to your thought space</p>
        </div>

        {/* Login Form */}
        <form className="space-y-lg">
          <div>
            <label htmlFor="email" className="block body mb-xs text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block body mb-xs text-primary">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-sm">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
              />
              <span className="caption">Remember me</span>
            </label>
            <Link to="/forgot-password" className="caption text-link hover:underline">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-xl">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-md caption text-secondary">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Login Options */}
        <div className="space-y-md mb-xl">
          <button className="btn btn-secondary w-full flex items-center justify-center gap-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="caption text-secondary">
            Don't have an account?{' '}
            <Link to="/signup" className="text-link hover:underline font-medium">
              Create one here
            </Link>
          </p>
        </div>

        {/* Therapeutic Message */}
        <div className="mt-xl p-md bg-secondary rounded-md">
          <p className="caption text-center text-primary">
            "Every journey of self-discovery begins with a single step. Welcome back to your safe space for thought exploration."
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage