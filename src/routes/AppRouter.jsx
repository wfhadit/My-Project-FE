import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import { History } from "../pages/History";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Search from "../pages/Search";
import { ProtectedPage } from "./protected-page";

class RouteClass {
  constructor(path, element, needLogin = false, guestOnly = false) {
    this.path = path;
    this.element = (
      <ProtectedPage needLogin={needLogin} guestOnly={guestOnly}>
        {element}
      </ProtectedPage>
    );
  }
}
export const routes = [
  new RouteClass("/", <Home />),
  new RouteClass("/login", <Login />, false, true),
  new RouteClass("/register", <Register />, false, true),
  new RouteClass("/search", <Search />),
  new RouteClass("/product/:productID", <Product />),
  new RouteClass("/cart", <Cart />, true, false),
  new RouteClass("/profile", <Profile />, true, false),
  new RouteClass("/checkout", <Checkout />, true, false),
  new RouteClass("/payment", <Payment />, true, false),
  new RouteClass("/history", <History />, true, false),
  new RouteClass("*", <Home />),
];
