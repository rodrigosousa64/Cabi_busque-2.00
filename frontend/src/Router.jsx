import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Home/Dashboard.jsx';
import Busca from './pages/Busca/Busca.jsx';
import VagasSobrando from './pages/VagasSobrando/VagasSobrando.jsx';
import Regras from './pages/Regras/Regras.jsx';
import PoliticaPrivacidade from './pages/Institucional/PoliticaPrivacidade.jsx';
import TermosDeUso from './pages/Institucional/TermosDeUso.jsx';
import Sobre from './pages/Institucional/Sobre.jsx';
import Layout from './components/Layout/Layout.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/busca',
        element: <Busca />,
      },
      {
        path: '/sobras',
        element: <VagasSobrando />,
      },
      {
        path: '/regras',
        element: <Regras />,
      },
      {
        path: '/politica-de-privacidade',
        element: <PoliticaPrivacidade />,
      },
      {
        path: '/termos-de-uso',
        element: <TermosDeUso />,
      },
      {
        path: '/sobre',
        element: <Sobre />,
      },
    ],
  },
]);
