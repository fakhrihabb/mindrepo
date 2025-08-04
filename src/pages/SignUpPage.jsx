import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-lg">
      <div className="card bg-white max-w-md w-full p-xl">
        {/* Logo/Brand */}
        <div className="text-center mb-2xl">
          <h1 className="h2 text-primary mb-xs">Mindrepo</h1>
          <p className="caption">Create your personal thought exploration space</p>
        </div>

        {/* Sign Up Form */}
        <form className="space-y-lg">
          <div>
            <label htmlFor="name" className="block body mb-xs text-primary">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="Enter your full name"
              required
            />
          </div>

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
              placeholder="Create a secure password"
              required
            />
            <p className="caption text-secondary mt-xs">
              At least 8 characters with a mix of letters and numbers
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block body mb-xs text-primary">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-start gap-sm">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 mt-1"
              required
            />
            <label htmlFor="terms" className="caption text-secondary">
              I agree to the{' '}
              <Link to="/terms" className="text-link hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-link hover:underline">Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-xl">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-md caption text-secondary">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Sign Up Options */}
        <div className="space-y-md mb-xl">
          <button className="btn btn-secondary w-full flex items-center justify-center gap-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign up with Google
          </button>
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="caption text-secondary">
            Already have an account?{' '}
            <Link to="/login" className="text-link hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Therapeutic Message */}
        <div className="mt-xl p-md bg-secondary rounded-md">
          <p className="caption text-center text-primary">
            "Taking the first step towards understanding your thoughts is an act of courage and self-compassion."
          </p>
        </div>

        {/* Privacy Note */}
        <div className="mt-md p-md bg-success rounded-md">
          <p className="caption text-center text-primary">
            🔒 Your thoughts and data are completely private and secure. We never share your personal information.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage