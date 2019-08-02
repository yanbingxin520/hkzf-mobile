import React from 'react'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import NoMatch from './pages/NoMatch'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Link to="/home">首页</Link>
          <Link to="/city">城市</Link>
          <Link to="/map">地图</Link>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/city" component={City} />
            <Route path="/map" component={Map} />
            <Route path="/nomatch" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
