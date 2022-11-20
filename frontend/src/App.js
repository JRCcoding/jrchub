import './App.css'
import Homescreen from './Screens/Homescreen'
import Blogscreen from './Screens/Blogscreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notescreen from './Screens/Notescreen'
import 'bootswatch/dist/lux/bootstrap.min.css'
import Widgetscreen from './Screens/Widgetscreen'
import BlogPostscreen from './Screens/BlogPostscreen'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen />} exact />
        <Route path='/Blogscreen' element={<Blogscreen />} />
        <Route path='/Notescreen' element={<Notescreen />} />
        <Route path='/Widgetscreen' element={<Widgetscreen />} />
        <Route path='/blogpost/:id' element={<BlogPostscreen />} />
      </Routes>
    </Router>
  )
}

export default App
