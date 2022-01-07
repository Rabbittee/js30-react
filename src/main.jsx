import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Day01 from './views/Day01';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Day01" element={<Day01 />}>
          <Route path=":name" element={<Day01 />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
