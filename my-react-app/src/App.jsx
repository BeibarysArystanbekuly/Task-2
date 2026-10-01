import ProfileName from './components/ProfileName.jsx'
import ProfilePhoto from './components/ProfilePhoto.jsx'
import AboutMe from './components/AboutMe.jsx'
import ContactInfo from './components/ContactInfo.jsx'
import './App.css'

function App() {
  return (
    <main className="profile">
      <header className="profile-header">
        <ProfilePhoto />
        <ProfileName />
      </header>
      <AboutMe />
      <ContactInfo />
    </main>
  )
}

export default App
