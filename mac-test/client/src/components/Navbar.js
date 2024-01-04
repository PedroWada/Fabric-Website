import {Link} from 'react-router-dom'
import styles from './styles/Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={styles.container}>
            <Link to={'/'}>
                <h1>Fabric</h1>
            </Link>
            <ul className={styles.ul}>
                <li className={styles.item}><Link to='/'>Home</Link></li>
                <li className={styles.item}><Link to='/about'>About</Link></li>
                <li className={styles.item}><Link to='/toDo'>To do App</Link></li>
                <li className={styles.item}><Link to='/counter'>Counter</Link></li>
                <li className={styles.item}><Link to='/fetch'>Fetching</Link></li>
                <li className={styles.item}><Link to='/excuser'>Excuser</Link></li>
                <li className={styles.item}><Link to='/chuck'>Dog</Link></li>
                <li className={styles.item}><Link to='/country'>Country</Link></li>
            </ul>
        </nav>
    )
}