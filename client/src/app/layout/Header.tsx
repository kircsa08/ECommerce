import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const midLinks = [
    {title: 'catalog', path:'/catalog'},
    {title: 'about', path:'/about'},
    {title: 'contact', path:'/contact'},
]

const rightLinks = [
    {title: 'login', path:'/login'},
    {title: 'register', path:'/register'}
]

const navStyles = {
    color: 'inherit', 
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active':{
        color: 'text.secondary'
    }
}

interface Props{
    darkMode: boolean
    handleChange: () => void;
}

export default function Header({darkMode, handleChange}: Props){
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: 1,
                        p: 3,
                    }}
                    >
                <Typography variant="h6"
                    component={NavLink}
                    to="/"
                    sx={navStyles}>
                    ReStore
                </Typography> 
                    <IconButton sx={{ ml: 1 }} onClick={handleChange} color="inherit">
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
                <List sx={{display: 'flex'}}>
                    {
                        midLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))
                    }
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton size="large" edge="start" color='inherit' sx={{mr: 2}}>
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{display: 'flex'}}>
                        {
                            rightLinks.map(({title, path}) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}