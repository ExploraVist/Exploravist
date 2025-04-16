import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Updates from './routes/Updates.jsx';
import UpdatesPage from './routes/UpdatesPage.jsx';
import Contact from './routes/Contact.jsx';
import Error404 from './routes/Error404.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/updates', element: <Updates /> },
      { path: '/updates/:slug', element: <UpdatesPage /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <Error404 /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);