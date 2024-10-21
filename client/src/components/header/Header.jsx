import React, { useState } from 'react'
import styles from "./header.module.scss"
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Drawer, List, ListItem, IconButton } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={styles.header}>
            <IconButton onClick={() => setOpenMenu(true)}>
                <MenuIcon className={styles.menu} />
            </IconButton>
            <Drawer anchor='left' open={openMenu} onClose={() => setOpenMenu(false)}>
                <List>
                    <ListItem className={styles.listItem} button component={Link} to="/" onClick={() => setOpenMenu(false)}><HomeIcon/> <i style={{marginLeft: 20}}>Hem</i></ListItem>
                    <ListItem className={styles.listItem} button component={Link} to="/createevent" onClick={() => setOpenMenu(false)}><EventNoteIcon/><i style={{marginLeft: 20}}>Skapa nytt event</i></ListItem>
                    <ListItem className={styles.listItem} button component={Link} to="/eventdetail/1" onClick={() => setOpenMenu(false)}><LibraryBooksIcon/> <i style={{marginLeft: 20}}>Event detaljer</i></ListItem>
                </List>
            </Drawer>
            <h1 className={styles.title}>Eventhanterare</h1>
            <nav>
                <Link to="/createevent">
                    <Button variant="contained" color='success'>Skapa nytt event</Button>
                </Link>
            </nav>

        </div>
    )
}

export default Header

