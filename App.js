import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Provider as PaperProvider } from 'react-native-paper';

import Splash from "./screens/Splash";
import Navigation from "./Navigation";

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
      {isLoaded ? (
      <PaperProvider>
        <Navigation />
      </PaperProvider>
      ) : (
        <Splash />
      )}
    </>
  );
}
