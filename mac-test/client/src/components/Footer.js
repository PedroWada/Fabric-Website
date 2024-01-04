import {FaFacebook, FaLinkedinIn, FaInstagram, FaCopyright} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styles from './styles/Footer.module.css'

export default function Footer() {
    return(
        <div className={styles.container}>
            <p>Follow us in our social medias:</p>
            <div>
                <Link to='/' target='_blank'><FaFacebook/></Link>
                <Link to='/' target='_blank'><FaInstagram/></Link>
                <Link to='/' target='_blank'><FaLinkedinIn/></Link>
                <FaCopyright/>
            </div>
        </div>
    )
}