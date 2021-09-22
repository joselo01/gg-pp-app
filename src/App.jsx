import React from "react";
//import Proveedores from './pages/Proveedores';

import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { AppRouter } from "./AppRouter";
import { Footer } from "./components/molecules/Footer";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="bg-image">
        <div className="main-login">
          <div className="child-login">
            <div className="fluid-container">
              <AppRouter/>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
