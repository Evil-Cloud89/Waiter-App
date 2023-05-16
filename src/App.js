import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Table from "./components/pages/Table";
import NotFound from "./components/pages/NotFound";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
