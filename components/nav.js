import Link from "next/link"
import styles from "styles/nav.module.css"

export default function Nav() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}