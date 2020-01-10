import React from "react";

import { Container, Tabs, TabList, Tab, TabLink } from "./bulma";

const HeaderNav: React.FC = () => (
    <Tabs isBoxed>
        <Container>
            <TabList>
                <Tab isActive><TabLink>Tanzfiguren</TabLink></Tab>
            </TabList>
        </Container>
    </Tabs>
);

export default HeaderNav;