import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Achievements } from './components/Achievements'
import { Socials } from './components/Socials'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="content-wrapper">
                <Hero />
                <hr className="section-divider" />
                <Projects />
                <hr className="section-divider" />
                <Experience />
                <hr className="section-divider" />
                <Skills />
                <hr className="section-divider" />
                <Education />
                <hr className="section-divider" />
                <Certifications />
                <hr className="section-divider" />
                <Achievements />
                <hr className="section-divider" />
                <Socials />
            </div>
            <Footer />
        </div>
    )
}

export default App
