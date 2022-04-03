import React from "react"
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                data-cy="current-link"
                name="Current news"
                as={Link}
                to={{ pathname: "/"}}
                />
                <Menu.Item
                data-cy="sports-link"
                name="Sports News"
                as={NavLink}
                to={{ pathname: "/sports"}}
                />
                <Menu.Item
                   data-cy="business-link"
                name="Business News"
                as={NavLink}
                to={{ pathname: "/business"}}
                />
            </Menu>
        </Segment>
    );
};

export default NavBar