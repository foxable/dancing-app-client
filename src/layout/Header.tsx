import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Container>
        <Typography variant="h6">Tanzfiguren</Typography>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
