import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface Props{
    darkMode: boolean
    handleChange: () => void;
}

export default function Header({darkMode, handleChange}: Props){
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    ReStore
                </Typography> 
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                    }}
                    >
                    <IconButton sx={{ ml: 1 }} onClick={handleChange} color="inherit">
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}