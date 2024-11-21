import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Index from './pages/index/Index.jsx';
import Router, { Switch, Route } from 'crossroad';
import NotFound from './pages/notfound/NotFound.jsx';
import Base from './components/base/Base.jsx';
import Patrocinadores from './pages/patrocinadores/Patrocinadores.jsx';
import Atletas from './pages/atletas/Atletas.jsx';
import Contato from './pages/contato/Contato.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/patrocinadores" component={Patrocinadores} /> 
        <Route path="/atletas" component={Atletas} /> 
        <Route path="/contato" component={Contato} /> 
        <Route component={NotFound} />
      </Switch>
    </Router>
    {/* foi alterado para invés de puxar o App.jsx, puxar do pages/index/Index.jsx */}
  </StrictMode>
);
