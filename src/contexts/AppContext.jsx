import React, { createContext, useState } from "react";
import Toast from "../components/Toast";

const appContext = createContext();
const AppContextProvider = appContext.Provider;

function AppContext({ children }) {
  const [toast, setToast] = useState(undefined);

  return (
    <AppContextProvider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContextProvider>
  );
}
export { appContext };

export default AppContext;
