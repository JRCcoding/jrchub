import './App.css'
import Homescreen from './Screens/Homescreen'
import Blogscreen from './Screens/Blogscreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'wouter'
import Notescreen from './Screens/Notescreen'
import 'bootswatch/dist/lux/bootstrap.min.css'
import Widgetscreen from './Screens/Widgetscreen'
import BlogPostscreen from './Screens/BlogPostscreen'
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
      <Route path='/blogposts/:id'>
        <BlogPostscreen />
      </Route>
      <Route path='/Widgetscreen'>
        <Widgetscreen />
      </Route>
    </>
  )
}

export default App
