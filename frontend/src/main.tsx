import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserProvider } from "./contexts/userContext.tsx";
import { ApolloClientProvider } from "./contexts/apolloClientContext.tsx";
import { UserEditionsProvider } from "./contexts/userEditionsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ApolloClientProvider>
        <UserEditionsProvider>
          <App />
        </UserEditionsProvider>
      </ApolloClientProvider>
    </UserProvider>
  </React.StrictMode>,
);
