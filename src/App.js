import "./App.css";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="mx-auto" style={{maxWidth:"1680px"}}>
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
