import { Menu, menuOpen, setMenuOpen } from "@/components/common/menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProtectedRoutes } from "@/routes/protected";
import { PublicRoutes } from "@/routes/public";
import { A } from "@solidjs/router";

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={1.5}
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
};

const BarsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={1.5}
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
};

export function Header() {
  return (
    <>
      <nav class="bg-white border-b border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a href={"/"} class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CMA
            </span>
          </a>
          <ul class="flex flex-row items-center">
            <li>
              <A class={buttonVariants({ variant: "link" })} href={"/"}>
                <UserIcon />
              </A>
            </li>
            <li>
              <Button
                variant={"link"}
                onclick={() => {
                  setMenuOpen(!!!menuOpen());
                }}
              >
                <BarsIcon />
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      <Menu />
    </>
  );
}
