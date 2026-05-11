import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewLandingPage from "./pages/NewLandingPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewLandingPage />} />
      <Route path="/new" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
