import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Component, ParentProps } from "solid-js";

export const CenterLayout: Component<ParentProps> = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main class="flex flex-row">
        <div class="basis-1/4"></div>
        <article class="basis-1/2">{props.children}</article>
        <div class="basis-1/4"></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
