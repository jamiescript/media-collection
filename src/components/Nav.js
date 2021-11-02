/** @jsx jsx */
import { jsx } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavList, NavListItem, NavListItemLink } from './lib';
import Auth from './Auth';
import Search from './Search';

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
              <NavListItemLink to="/search">Search</NavListItemLink>
            </NavListItem>
          </NavList>
        </nav>

        <Switch>
          <Route path="/media">
            <Search />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
