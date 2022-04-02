import React from 'react'
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                data-cy="current-news-link"
                name="Current news"
                as={Link}
                to={{ pathname: "/"}}
                />
                <Menu.Item
                data-cy="sports-news-link"
                name="Sports News"
                as={NavLink}
                to={{ pathname: "/sports"}}
                />
                <Menu.Item
                   data-cy="business-news-link"
                name="Business News"
                as={NavLink}
                to={{ pathname: "/businss"}}
                />
            </Menu>
        </Segment>
    );
};

export default Navbar