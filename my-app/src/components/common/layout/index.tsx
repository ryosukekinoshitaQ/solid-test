import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Component, ParentProps } from "solid-js";

export const Layout: Component<ParentProps> = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
