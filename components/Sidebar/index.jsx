import Link from "next/link";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLayerGroup, faLinesLeaning, faEllipsis, faSignal, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <h2>THE DS-LEARNING</h2>

      <Link href="/">
        <a>
          <FontAwesomeIcon icon={faHouse} /> Home
        </a>
      </Link>

      <span className={styles.nav_group_title}>Estruturas</span>

      <Link href="/stack">
        <a>
          <FontAwesomeIcon icon={faLayerGroup} /> Pilha
        </a>
      </Link>

      <Link href="/queue">
        <a><FontAwesomeIcon icon={faLinesLeaning} />Fila</a>
      </Link>

      <Link href="#">
        <a><FontAwesomeIcon icon={faEllipsis} />Lista</a>
      </Link>

      <span className={styles.nav_group_title}>Outros Algoritmos</span>
      <Link href="/bubblesort">
        <a><FontAwesomeIcon icon={faSignal} />Bubblesort</a>
      </Link>
      
      <Link href="#">
        <a><FontAwesomeIcon icon={faMagnifyingGlass} />Busca Binária</a>
      </Link>
    </nav>
  );
}
