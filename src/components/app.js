import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>5-day Weather Search</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
