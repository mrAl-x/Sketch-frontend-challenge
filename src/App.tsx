import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArtboardView from './pages/artboard-view/ArtboardView';
import DocumentView from './pages/document-view/DocumentView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/document/:documentId" element={<DocumentView />} />
        <Route path="/document/:documentId/artboard/:artboardId" element={<ArtboardView />} />
        <Route path="*" element={<DocumentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
