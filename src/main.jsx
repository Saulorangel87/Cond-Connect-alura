import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { Feed } from './pages/Feed/index.jsx'
import { BlogPost } from './pages/BlogPost/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    {/* <Register /> */}
    {/* <Feed /> */}
    {/* <BlogPost /> */}
  </StrictMode>,
)
