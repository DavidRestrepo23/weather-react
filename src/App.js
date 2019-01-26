import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
                    <div class="container">
            <div class="row">
              <div class="col">
                <div class="weather-card one">
                  <div class="top">
                    <div class="wrapper">
                     <WeatherLocation />
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="wrapper">
                      <ul class="forecast">
                        <a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
                        <li class="active">
                          <span class="date">Yesterday</span>
                          <span class="lnr lnr-sun condition">
                            <span class="temp pl-2"> 23<span class="deg">0</span><span class="temp-type">C</span></span>
                          </span>
                        </li>
                        <li>
                          <span class="date">Tomorrow </span>
                          <span class="lnr lnr-cloud condition">
                            <span class="temp pl-3"> 21<span class="deg">0</span><span class="temp-type">C</span></span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
