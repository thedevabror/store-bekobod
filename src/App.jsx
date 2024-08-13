import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
