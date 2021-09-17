import React from "react";
//import Proveedores from './pages/Proveedores';

import { Provider } from "react-redux";
import { Login } from "./pages/Login";
import { Footer } from "./components/molecules/Footer";
import generateStore from "./redux/store";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="bg-image">
        <div className="main-login">
          <div className="child-login">
            <div className="container">
              <Login />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
