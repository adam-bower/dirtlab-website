import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ConstructionSection from './components/ConstructionSection'
import DesignSection from './components/DesignSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dirt-dark">
      <Navigation />
      <main>
        <Hero />
        <ConstructionSection />
        <DesignSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
