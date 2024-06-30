import { component$, Slot } from "@builder.io/qwik";
import { ContainerSmall } from "~/components/container/container";
import { Header } from "~/layout/header/header";
import { Footer } from "~/layout/footer/footer";

export default component$(() => {
  return (
    <>
      <ContainerSmall>
        <Header />
      </ContainerSmall>

      <Slot />

     
      <Footer />
    
    </>
  );
});
