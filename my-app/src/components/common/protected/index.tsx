import { PublicRoutes } from "@/routes/public";
import { currentUser } from "@/libs/auth";
// import { getProtectedPaths } from "@/libs/protected";
import { useLocation, useNavigate } from "@solidjs/router";
import { createEffect, createSignal, ParentProps, Show } from "solid-js";

export function Protected(props: ParentProps) {
  const [getUser, setUser] = createSignal<boolean | null>(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const protectedPaths = getProtectedPaths();
  // if (!!!protectedPaths.includes(location.pathname)) {
  //   return <NotFound />;
  // }

  createEffect(async () => {
    try {
      const user = await currentUser();
      setUser(user !== undefined);
    } catch (e) {
      setUser(null);
    }

    if (getUser() === null) {
      navigate("/");
    }
  });

  return (
    <Show when={getUser()} fallback={<></>}>
      {props.children}
    </Show>
  );
}
