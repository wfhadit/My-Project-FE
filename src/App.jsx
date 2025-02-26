// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/AppRouter";

function App() {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Routes>
  );
}

export default App;
