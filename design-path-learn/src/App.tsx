import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import { ROUTES } from './utils/router/routes/routes'
import Loading from './pages/loading/Loading'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOADING} element={<Loading />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
