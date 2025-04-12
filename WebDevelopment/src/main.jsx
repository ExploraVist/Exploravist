import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Updates from './routes/Updates.jsx';
import Error404 from './routes/Error404.jsx';
import { UpdatesProvider } from './context/UpdatesContext';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/updates', element: <Updates/> },
  { path: '*', element: <Error404/> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UpdatesProvider>
      <RouterProvider router={router} />
    </UpdatesProvider>
  </React.StrictMode>,
);