import Social from "../Social";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.meuRodape}>
      <div className={styles.rodape}>
        <h3>Desenvolvimento por</h3>
        <p>&#169; 2024 Sérgio Sousa. Todos os direitos reservados.</p>

      </div>
      <Social />
    </footer>
  );
}
export default Footer;
