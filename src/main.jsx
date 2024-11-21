import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Index from './pages/index/Index.jsx';
import Router, { Switch, Route } from 'crossroad';
import NotFound from './pages/notfound/NotFound.jsx';
import Base from './components/base/Base.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    {/* foi alterado para invés de puxar o App.jsx, puxar do pages/index/Index.jsx */}
  </StrictMode>
);
