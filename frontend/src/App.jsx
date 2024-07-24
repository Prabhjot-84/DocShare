import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useAppContext } from './contexts/AppContext.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path='/home' element={ <Home/> } />
          {/* <Route path='/expense' element={ <Expense /> } /> */}
          {/* <Route path='/dashboard' element={ <Dashboard /> } /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
