import React from 'react';
import './App.css';

import { AuthProvider } from './context/ContextHook.jsx';
import Home from './components/Home.jsx';

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();



function App() {

  return (
    <AuthProvider>
       <Home/>
    </AuthProvider>
  );
}

export default App;
