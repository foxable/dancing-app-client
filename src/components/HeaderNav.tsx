import { AppBar, Tab, Tabs, Container } from "@material-ui/core";
import React from "react";

const HeaderNav: React.FC = () => (
  <AppBar position="static">
    <Container>
      <Tabs value="figures">
        <Tab value="figures" label="Tanzfiguren" />
      </Tabs>
    </Container>
  </AppBar>
);

export default HeaderNav;
