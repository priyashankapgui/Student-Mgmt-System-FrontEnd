import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import styled, { keyframes } from 'styled-components';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';


export default function Appbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const rotate3D = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(360deg) rotateZ(0deg);
  }
`;


const AnimatedGroupsIcon = styled(SchoolRoundedIcon)`
  font-size: 50px;
  
  animation: ${rotate3D} 5s linear infinite;
`;

const StyledListItem = styled(ListItem)`
color:black;
font-size: 1.8rem;


 

  &:hover {
    color:#1976d2;
    cursor: pointer;
    
  
    
  }
`;
  const list = () => (
    <Box
     
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className='Drawer'
      sx={{
        width: '200px',
        height: '100vh'}}
    
    >
      <List     className='List'  > 
        <StyledListItem  component="a" href="/"  sx={{marginTop:'5rem'}} >
          <ListItemText primary="All Students"  />
          <PeopleAltRoundedIcon />
        </StyledListItem>
        <StyledListItem  component="a" href="/crud" sx={{marginTop:'5rem'}} >
          <ListItemText primary="Edit " />
          <PersonSearchRoundedIcon/>
        </StyledListItem>
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1,paddingBottom:'5vh' } }>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon  sx={{fontSize:32}}/>
          </IconButton>
     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontSize: 30,fontFamily: "Poppins, sans-serif",fontWeight:600,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',paddingRight: 5}}>
          <AnimatedGroupsIcon sx={{fontSize: 40}}/>  Student Management System
            
          </Typography>
         
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
       
      >
        {list()}
      </Drawer>
    </Box>
  );
}
