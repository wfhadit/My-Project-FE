import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/AppRouter";
import { DefaultScroll } from "./defaultscroll/defaultscroll";

function App() {
  return (
    <>
      <DefaultScroll />
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Routes>
    </>
  );
}

export default App;
