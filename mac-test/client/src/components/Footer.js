import {FaLinkedinIn, FaCopyright, FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styles from './styles/Footer.module.css'

export default function Footer() {
    return(
        <div className={styles.container}>
            <p>Follow me in my social medias:</p>
            <div>
                <Link to='https://github.com/PedroWada' target='_blank'><FaGithub/></Link>
                <Link to='https://www.linkedin.com/in/pedro-wada-11a2452a2/' target='_blank'><FaLinkedinIn/></Link>
                <FaCopyright/>
            </div>
        </div>
    )
}