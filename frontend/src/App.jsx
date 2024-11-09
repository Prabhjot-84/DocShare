import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import ReadDoc from './components/ReadDoc.jsx';
import CreateDoc from './components/CreateDoc.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path='/home' element={ <Home/> } />
          <Route path='/create' element={ <CreateDoc /> } />
          <Route path='/doc/:id' element={ <ReadDoc /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App

// user_2jhWiH0geud9tsmoN5Xf1aTmpZw