import { FaExternalLinkAlt, FaHeadset, FaMicrosoft } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>
        <a href="https://www.portalbeneficiocerto.com.br/sisbc/admin/home.jsf#">
          <FaExternalLinkAlt className={styles.icon} /> Portal BC (Produção)
        </a>
      </h3>
      <h3>
        <a href="https://grupo-bc.atlassian.net/servicedesk/customer/user/login?destination=portals">
          <FaHeadset className={styles.icon} /> Portal de Atendimento (Geral)
        </a>
      </h3>
      <h3>
        <a href="https://teams.microsoft.com/v2/">
          <FaMicrosoft className={styles.icon} /> Teams (Geral)
        </a>
      </h3>
    </footer>
  );
}

export default Footer;
