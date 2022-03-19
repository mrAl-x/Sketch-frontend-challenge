import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocumentView from './pages/DocumentView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/document" element={<DocumentView />} />
        <Route path="/document/:documentId" element={<DocumentView />} />
        <Route path="*" element={<DocumentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
