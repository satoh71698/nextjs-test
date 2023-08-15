import { useState } from "react"
import Link from "next/link"
import styles from "styles/nav.module.css"

export default function Nav() {
    const [navIsOpen, steNavIsOpen] = useState(false)

    const toggleNav = () => {
        steNavIsOpen((prev) => !prev)
    }
    const closeNav = () => {
        steNavIsOpen(false)
    }
    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                @media (max-width: 767px) {
                    body {
                        overflow: hidden;
                        position: fixed;
                        width: 100%;
                    }
                }
                `}</style>
            )}
            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <div onClick={closeNav} >Home</div>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <div onClick={closeNav} >About</div>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <div onClick={closeNav} >Blog</div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}