import React, { useState, useContext } from 'react';

const FlowContext = React.createContext ({});

export function FlowContextProvider({ children }) {
  const [alreadyStarted, setAlreadyStarted] = useState(false);
  const [serverActivePoints, setServerActivePoints] = useState(null);

  const addServerBoardConfiguration = (serverBoardConfiguration) => {
    const auxiliarySet = new Set();

    serverBoardConfiguration.flat().forEach(serverActivePoint => {
      const [rowIndex, columnIndex] = serverActivePoint;
      auxiliarySet.add(`${rowIndex}-${columnIndex}`);
    });

    setServerActivePoints(auxiliarySet);
  };

  return (
    <FlowContext.Provider value={{ alreadyStarted, setAlreadyStarted, serverActivePoints, addServerBoardConfiguration }}>
      {children}
    </FlowContext.Provider>
  );
}

export function useFlowContext() {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error('useFlow must be used within a FlowProvider');
  }
  return context;
}

export default FlowContext;
