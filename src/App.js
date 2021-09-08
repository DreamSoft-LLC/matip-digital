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
import Register from "./pages/register";
import Signup from "./pages/signup";
function App() {
  return (
    <BrowserRouter >
        <Route exact  path="/" component={Landing} />
        <PublicRoute restricted  path="/login" component={Login} />
        <PublicRoute restricted path="/signup" component={Signup} />
        <PublicRoute restricted path="/register" component={Register} />
        <Route path="/about-us" component={Aboutus} />
        <Route path="/pricing" component={Payment} />
        <Route path="/contact" component={Contactus} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/payment" component={Payment} />
    </BrowserRouter>
  );
}

export default App;
