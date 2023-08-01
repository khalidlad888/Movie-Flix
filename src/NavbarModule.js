import React from "react";
import styles from './Navbar.module.css'



class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className={styles.nav}>
                    <div className={styles.title}>MOVIE APP</div>

                    <div className={styles.carticoncontainer}>
                        <img className={styles.cartimg} alt="Cart-Icon"
                            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                        />
                        <span className={styles.cartcount}>5</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;