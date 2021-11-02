/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';
import { SearchInput } from './lib';

const Search = () => {
  const [query, setQuery] = React.useState('');
  const [queried, setQueried] = React.useState(false);
  const [price, setPrice] = React.useState(null);

  React.useEffect(() => {
    if (!queried) return;
    window
      .fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=${query}`
      )
      .then((response) => response.json())
      .then((data) => setPrice(data[0].current_price));
  }, [query, queried]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
    setQueried(true);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <label htmlFor="search">Search for crypto</label>
      <SearchInput id="search" />
      <div>£{price}</div>
    </form>
  );
};

export default Search;
