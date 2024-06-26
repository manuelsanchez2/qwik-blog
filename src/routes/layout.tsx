import { component$, Slot } from "@builder.io/qwik";
import { ContainerSmall } from "~/components/container/container";
import { Header } from "~/layout/header/header";

export default component$(() => {
  return (
    <>
      <ContainerSmall>
        <Header />
      </ContainerSmall>

      <Slot />

      <footer>footi</footer>
    </>
  );
});
