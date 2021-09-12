import {BrowserRouter , Route} from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/adminLogin";

function App() {
  return (
    <BrowserRouter >
        <Route exact  path="/" component={AdminLogin} />
        <Route path="/admin" component={AdminDashboard} />
    </BrowserRouter>
  );
}

export default App;
