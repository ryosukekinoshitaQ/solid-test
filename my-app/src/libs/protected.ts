import { ProtectedRoutes } from "@/routes/protected";
import { Params } from "@solidjs/router";

// export const getProtectedPaths = (): string[] => {
//   return Object.entries(ProtectedRoutes).map((v: any) => v[1].path);
// };
// export const getAllowedQueries = (path: string): string[] | undefined => {
//   return Object.entries(ProtectedRoutes).find(
//     (v: any) => v[1].path === path
//   )?.[1];
// };
// export const filteredQueries = (
//   path: string,
//   searchParams: Partial<Params>
// ): Partial<Params> => {
//   const allowedQueries = getAllowedQueries(path);
//   return Object.fromEntries(
//     Object.entries(searchParams).map((q) => {
//       if (allowedQueries == undefined) return q;
//       return allowedQueries.includes(q[0]) ? q : [q[0], ""];
//     })
//   );
// };
