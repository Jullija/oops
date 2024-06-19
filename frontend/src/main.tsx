import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./contexts/userContext.tsx";
import { ApolloClientProvider } from "./contexts/apolloClientContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ApolloClientProvider>
        <App />
      </ApolloClientProvider>
    </UserProvider>
  </React.StrictMode>,
);
