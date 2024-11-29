import { Link } from "react-router-dom"
import { ROUTES } from "../App"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to={ROUTES.homePage.path}>{ROUTES.homePage.name}</Link>
        <Link to={ROUTES.advanturePage.path}>{ROUTES.advanturePage.name}</Link>
        <Link to={ROUTES.crewPage.path}>{ROUTES.crewPage.name}</Link>
        <Link to={ROUTES.aboutPage.path}>{ROUTES.aboutPage.name}</Link>
      </div>
    </nav>
  )
}

export default Navbar