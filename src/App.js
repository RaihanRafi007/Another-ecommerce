import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";

import Signup from "./containers/auth/Signup";
import Login from "./containers/auth/Login";
import Activate from "./containers/auth/Activate";
import ResetPassword from "./containers/auth/ResetPassword";
import ResetPasswordConfirm from "./containers/auth/ResetPasswordConfirm";

import Shop from "./containers/Shop";
import ProductDetail from "./containers/pages/productDetail";

import Search from "./containers/pages/Search";
import Cart from "./containers/pages/Cart";
import Checkout from "./containers/pages/Checkout";
import ThankYou from "./containers/pages/ThankYou";
import Dashboard from "./containers/pages/Dashboard";
import DashboardPayments from "./containers/pages/DashboardPayments";
import DashboardPaymentDetail from "./containers/pages/DashboardPaymentDetail";
import DashboardProfile from "./containers/pages/DashboardProfile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Authentication */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />

          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />

          <Route path="/thankyou" element={<ThankYou />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/payments" element={<DashboardPayments />} />
          <Route
            path="/dashboard/payment/:transaction_id"
            element={<DashboardPaymentDetail />}
          />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
