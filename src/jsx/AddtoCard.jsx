import React from 'react';
import SideBar from '../pages/SideBar'
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';


const AddtoCard = () => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
  return (
    <div>
         <Box sx={{ display: 'flex' }}>
                <SideBar />
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                    <DrawerHeader />
                   hello
                    
                </Box>
            </Box>
    </div>
  )
}

export default AddtoCard