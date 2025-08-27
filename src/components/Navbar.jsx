// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../styles/Navbar.module.css";

// export default function Navbar() {
//     return (
//         <nav className={styles.navbar}>
//             <h2 className={styles.logo}>U-Store</h2>
//             <ul className={styles.navLinks}>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 <li><Link to="/products">Products</Link></li>
//             </ul>
//         </nav>
//     );
// }



import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.logo}>E-Commerce</h2>

            {/* Hamburger Button */}
            <div
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </div>

            {/* Links */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            </ul>
        </nav>
    );
}
