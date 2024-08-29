import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./Social.module.css";

function Social(){
    return(
    <div className={styles.redesSociais}>
            <ul className={styles.listaRedes}>
            <li>
                <a
                href="https://www.linkedin.com/in/sergiosousa-tec/"
                title="Ir para o LinkedIn"
                target="_blank"
                >
                <i className={styles.icon}>
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '48px' }}/>
                </i>
                </a>
            </li>
            <li>
                <a
                href="https://wa.me/5583986874845"
                title="Enviar Mensagem no WhatsApp"
                target="_blank"
                >
                <i className={styles.icon}>
                    <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '48px' }}/>
                </i>
                </a>
            </li>
            <li>
                <a
                href="https://github.com/SergioDevSousa"
                title="Ir para o GitHub"
                target="_blank"
                >
                <i className={styles.icon}>
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '48px' }}/>
                </i>
                </a>
            </li>
            <li>
                <a
                href="https://www.instagram.com/siga_sergio"
                title="Ir para o Instagram"
                target="_blank"
                >
                <i className={styles.icon}>
                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '48px' }}/>
                </i>
                </a>
            </li>
            </ul>
        </div>
    );
}
export default Social;


