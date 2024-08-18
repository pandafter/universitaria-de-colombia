// index.tsx
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutMain } from './components/layouts/LayoutMain';
import { HomePage } from './pages/Home/HomePage';
import Preloader from './components/Preloader/Preloader';

const router = createBrowserRouter([{
  path: "/",
  element: <LayoutMain/>,
  children: [
    { index: true, element: <HomePage/> }
  ]
}]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Ajusta el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <RouterProvider router={router}/>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
