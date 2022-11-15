import './App.css'
import Navigation from './Components/Navigation'
import Homescreen from './Screens/Homescreen'
import Blogscreen from './Screens/Blogscreen'
import Header from './Components/Header'
import Posts from './Components/Posts'
import Notes from './Components/Notes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'wouter'
import Notescreen from './Screens/Notescreen'

function App() {
  return (
    <>
      <Route path='/'>
        <Homescreen />
      </Route>
      <Route path='/Blogscreen'>
        <Blogscreen />
      </Route>
      <Route path='/Notescreen'>
        <Notescreen />
      </Route>
    </>
  )
}

export default App
