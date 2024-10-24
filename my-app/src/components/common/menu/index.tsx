import { Button } from "@/components/ui/button";
import { createSignal, Show } from "solid-js";

const CloseIcon = () => {
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export const [menuOpen, setMenuOpen] = createSignal(false);

export function Menu() {
  return (
    <Show when={menuOpen()}>
      <div class="absolute h-full w-full top-0 bg-white z-50">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-3">
          <h1 class="text-xl">Menu</h1>
          <Button
            variant={"link"}
            onclick={() => {
              setMenuOpen(false);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
        <div class="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
          <ul>
            <li>項目１</li>
            <li>項目２</li>
            <li>項目３</li>
            <li>項目４</li>
            <li>項目５</li>
          </ul>
        </div>
      </div>
    </Show>
  );
}
