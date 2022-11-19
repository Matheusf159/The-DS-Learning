import Link from "next/link";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLayerGroup, faLinesLeaning, faEllipsis, faSignal, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
      <nav className={styles.nav}>
        <h2>DS-LEARNING</h2>

        <button className={styles.active}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faHouse} /> Home
          </a>
        </Link>

        <span className={styles.nav_group_title}>Estruturas</span>

        <Link href="/stack/visualization">
          <a>
            <FontAwesomeIcon icon={faLayerGroup} /> Pilha
          </a>
        </Link>

        <Link href="/queue/visualization">
          <a><FontAwesomeIcon icon={faLinesLeaning} />Fila</a>
        </Link>

        <Link href="/linkedList/visualization">
          <a><FontAwesomeIcon icon={faEllipsis} />Lista</a>
        </Link>

        <span className={styles.nav_group_title}>Outros Algoritmos</span>
        <Link href="/selectionsort/visualization">
          <a><FontAwesomeIcon icon={faSignal} />SelectionSort</a>
        </Link>
      </nav>
  );
}

