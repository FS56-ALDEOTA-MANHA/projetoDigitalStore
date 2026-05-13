import { BrowserRouter, Router, Route } from "react-router-dom";
import ColeçõesEmDestaque from "./ColeçõesEmDestaque.Jsx";

function Produto()  {
  return  <h1>Pagina de Produtos</h1>  
 }     

function App() {
    return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<ColeçõesEmDestaque />} />
        <Route path="Produtos" element={<Produtos />} />
    </Router>
  </BrowserRouter>
 );
}

export default App;
