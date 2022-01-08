import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Day from './views/Day';
import NoMatch from './views/NoMatch';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/404" element={<NoMatch />} />
        <Route path=":day/:name" element={<Day />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
