import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboards from "./Dashboards/Dashboards";
import Form from "./Form";
import { Provider } from "react-redux";
import store from "./app/store";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboards></Dashboards>}></Route>
          {/* <Route path='/cart' element={<Cart></Cart>}></Route> */}
        </Routes>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
