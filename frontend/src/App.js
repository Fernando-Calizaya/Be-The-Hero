import React from 'react'; // este ambiente esta com "live relout" transmição automatica com a page client
import './global.css'
import Routes from './routes' // importanto a primeira rota "Logon"

//Este HTML integrado no JavaScript se chama: JSX
function App() {
  return ( // retornará a primeira página de Logon que é representada como "primeira rota" feita até agora
   <Routes /> // mesma coisa que <Routes> </Routes>
  );
}

export default App;
