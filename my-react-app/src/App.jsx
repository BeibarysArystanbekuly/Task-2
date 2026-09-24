import ProfileName from './components/ProfileName.jsx'
import ProfilePhoto from './components/ProfilePhoto.jsx'
import AboutMe from './components/AboutMe.jsx'
import ContactInfo from './components/ContactInfo.jsx'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#about-me-heading">Skip to About Me</a>
      <div className="site-shell">
        <header className="site-header">
          <p className="eyebrow">★ WELCOME TO MY LITTLE CORNER OF THE WORLD WIDE WEB ★</p>
          <ProfileName />
          <p className="tagline">Student. Computer person. Dombyra enjoyer.</p>
          <nav aria-label="Main navigation">
            <a href="#home">⌂ Home</a>
            <a href="#about-me-heading">★ About me</a>
            <a href="#contact-heading">✉ Contact</a>
          </nav>
        </header>
        <div className="announcement">
          <strong>BREAKING NEWS:</strong> fourth term loading… energy not found.
        </div>
        <main id="home" className="page-grid">
          <aside className="sidebar" aria-label="Profile and contact information">
            <section className="photo-panel" aria-label="Profile photo">
              <div className="window-bar"><span>beibarysPhoto.jpg</span><span aria-hidden="true">_ □ ×</span></div>
              <ProfilePhoto />
              <p className="photo-caption">YES. THIS IS THE WEBMASTER.</p>
            </section>
            <div className="status-note">
              <strong>Current status:</strong>
              <p>Physically here.<br />Mentally on semester break.</p>
            </div>
            <ContactInfo />
          </aside>
          <div className="main-column">
            <div className="construction">🚧 PERMANENTLY UNDER CONSTRUCTION 🚧</div>
            <AboutMe />
            <p className="guest-note">You made it to the bottom. You are now an honorary internet friend.</p>
          </div>
        </main>
        <footer>
          <div className="web-badges" aria-label="Website badges">
            <span>100% HUMAN</span><span>POWERED BY REACT</span><span>CSS WAS A MISTAKE</span>
          </div>
          <p>Made in Almaty, Kazakhstan. Best viewed with your eyes.</p>
          <a href="#home">↑ Back to the good stuff</a>
        </footer>
      </div>
    </>
  )
}

export default App
