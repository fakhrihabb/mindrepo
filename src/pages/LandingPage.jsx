import Navbar from '../components/LandingPage/Navbar'
import HeroSection from '../components/LandingPage/HeroSection'
import HowItWorksSection from '../components/LandingPage/HowItWorksSection'
import FeaturesSection from '../components/LandingPage/FeaturesSection'
import CTASection from '../components/LandingPage/CTASection'
import Footer from '../components/LandingPage/Footer'

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default LandingPage