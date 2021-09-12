import { BrowserRouter, Route } from "react-router-dom"
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
import { DataProvider } from "./contexts/keeper";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/adminLogin";

function App() {
  return (
    <BrowserRouter >
      <PublicRoute restricted exact path="/" component={AdminLogin} />
      <PublicRoute restricted exact path="/login" component={AdminLogin} />
      <DataProvider>
        <PrivateRoute path="/admin" component={AdminDashboard} />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
