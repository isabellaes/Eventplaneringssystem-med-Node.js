import React from 'react'
import styles from "./header.module.scss"
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <div className={styles.header}>
            <MenuIcon className={styles.menu} />
            <h1 className={styles.title}>Eventhanterare</h1>
            <Button  variant="contained" color='success'>Skapa nytt event</Button>
        </div>
    )
}

export default Header
