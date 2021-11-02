/** @jsx jsx */
import { jsx } from '@emotion/react';
import Auth from './Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavList, NavListItem, NavListItemLink } from './lib';

function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <NavList>
            <NavListItem>
              <NavListItemLink to="/">Auth</NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink to="/media">Media</NavListItemLink>
            </NavListItem>
          </NavList>
        </nav>

        <Switch>
          <Route path="/media"></Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
