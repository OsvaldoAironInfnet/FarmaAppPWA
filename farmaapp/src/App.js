import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Loading, Menu } from "./components";
import { Suspense, useEffect, useState } from 'react';
import {firebaseConfig} from "./firebase_setup/firebase";

import routes from './routes';

function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const firebaseApp = initializeApp(firebaseConfig);

    return <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        {
          routes.map((route, idx) => (
            console.log(route.path),
            <Route key={`${idx}_rotas`} exact path={route.path} element={<route.element firebaseApp={firebaseApp} setCurrentPath={setCurrentPath}/>} />
          ))
        }
      </Routes>
    </Suspense>
    <br></br>
  </Router>;
  }
export default App;
