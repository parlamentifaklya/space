import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Adventures from './pages/Adventures'
import About from './pages/About'
import Crew from './pages/Crew'
import Home from './pages/Home'
import Navbar from './components/Navbar'

export const ROUTES = {
  homePage: {path: "/", name: "HomePage", component: <Home />},
  crewPage: {path: "/crew", name: "CrewPage", compnent: <Crew />},
  advanturePage: {path: "/adventures", name: "AdventuresPage", component: <Adventures />},
  aboutPage: {path: "/about", name: "AboutPage", component: <About />}
}

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path={ROUTES.homePage.path} element={ROUTES.homePage.component}/>
        <Route path={ROUTES.crewPage.path} element={ROUTES.crewPage.compnent}/>
        <Route path={ROUTES.advanturePage.path} element={ROUTES.advanturePage.component}/>
        <Route path={ROUTES.aboutPage.path} element={ROUTES.aboutPage.component}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App