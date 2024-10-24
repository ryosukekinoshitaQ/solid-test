import Home from "@/features/home";
import { RouteDefinition } from "@solidjs/router";

export const PublicRoutes: RouteDefinition[] = [
  { path: "/", component: () => <Home /> },
];
