import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </>
  )
}

export default App
