import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import "./app.css";
import { PublicRoutes } from "./routes/public";

export default function App() {
  return (
    <div id="root">
      <Router
        root={(props) => (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <Suspense>test{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        {PublicRoutes}
      </Router>
    </div>
  );
}
