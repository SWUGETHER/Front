import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Splash from "./screens/Splash";
import AfterSplash from "./screens/AfterSplash";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { LogProvider } from "./screens/Content/context/LogContext";
import 'react-native-get-random-values';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LogProvider>
            {isLoaded ? <AfterSplash /> : <Splash />}
          </LogProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
