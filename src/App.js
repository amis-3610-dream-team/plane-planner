import React, {Component} from "react";
import "./App.css";
import Routes from "./Components/Routes/Routes";
import Navigation from './Components/Navigation/Navigation';

export default class App extends Component {
  render() {
    return (
    <div className="App-Container">
      <Navigation/>
      <Routes />
    </div>
    );
  }
}
