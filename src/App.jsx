import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import WorkSection from './components/WorkSection'
import TeamSection from './components/TeamSection'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WorkSection />
        <TeamSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
