import React, { createContext, useContext } from 'react';

// createContext를 사용하여 LogContext 생성
const LogContext = createContext();

export const LogProvider = ({ children }) => {
  // onCreate 함수 정의
  const onCreate = (logData) => {
    console.log('정보 생성:', logData);
  };

  return (
    // Provider를 사용하여 LogContext의 값을 제공
    <LogContext.Provider value={{ onCreate }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogContext = () => useContext(LogContext);

export default LogContext;
