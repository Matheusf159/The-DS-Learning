import Link from 'next/link'

import styles from '../styles/Button.module.css'

export default function Button(props) {
    return (
        <Link href={`${props.url}`}>
            <a className={styles.button}>{props.name}</a>
        </Link>
    )
}