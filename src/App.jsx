import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout/Layout';
import Spinner from './components/Spinner/Spinner';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home/Home'));
// const Tweets = lazy(() => import('../pages/Tweets/Tweets'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route index element={<div>My home</div>} />
            <Route path="wallet" element={<div>My wallet</div>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>

      {/* <ToastContainer theme="light" position="bottom-right" /> */}
    </>
  );
}
