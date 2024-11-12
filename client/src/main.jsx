import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Pages/Redux/store.js'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
<Toaster />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
