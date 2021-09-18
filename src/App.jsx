import React from "react";
//import Proveedores from './pages/Proveedores';

import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { AppRouter } from "./AppRouter";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="bg-image">
        <div className="main-login h-75">
          <div className="child-login">
            <div className="fluid-container">
              <AppRouter/>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
