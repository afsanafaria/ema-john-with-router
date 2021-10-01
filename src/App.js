import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";


function App() {
  return (
    <div >

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/review">
            <OrderReview />
          </Route>

          <Route path="/placeorder">
            <PlaceOrder />
          </Route>

          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route>
            <NotFound />
          </Route>

        </Switch>
      </BrowserRouter>



    </div>
  );
}

export default App;
