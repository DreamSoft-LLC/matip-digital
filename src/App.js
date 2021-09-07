import {BrowserRouter , Route} from "react-router-dom"
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
import Aboutus from "./pages/aboutus";
import Contactus from "./pages/contactus";
import Dashboard from "./pages/dashboard";
import Earnings from "./pages/earnings";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Payment from "./pages/payment";
import Signup from "./pages/signup";
function App() {
  return (
    <BrowserRouter >
        <Route exact  path="/" component={Landing} />
        <PublicRoute restricted  path="/login" component={Login} />
        <PublicRoute restricted path="/signup" component={Signup} />
        <Route path="/about-us" component={Aboutus} />
        <Route path="/contact" component={Contactus} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/payment" component={Payment} />
    </BrowserRouter>
  );
}

export default App;
