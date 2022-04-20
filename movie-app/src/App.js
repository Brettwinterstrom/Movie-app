import "./index.css";
import Header from "./components/Header";
import WatchList from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
