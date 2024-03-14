// JE definis une varialble pou r le faire apparaître dans l'index
// const App = () => {
// return (
//   <h1></h1>
// )

// };

// export default App;

// pour voir si on a bien télécharger les plugins on tape rsc
import React from 'react';
// on importe le composant BrowserRouter qui va nous permettre de gérer les routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Perdu from './pages/Perdu';

const App = () => {
  return (
    // apprès la création des pages on met les balises de routes (browerRouter et Routes)
    <BrowserRouter>
      <Routes>
        {/* on déclare les routes */}
        <Route path="/" element={<Home />} />{/* home est un composant */}
        <Route path="/about" element={<About />} />{/* About est un composant */}
        <Route path="*" element={<Perdu />} />{/* Perdu est un composant */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;