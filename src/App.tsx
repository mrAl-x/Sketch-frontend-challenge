import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocumentView from './pages/DocumentView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocumentView />} />
        <Route path="*" element={<DocumentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
