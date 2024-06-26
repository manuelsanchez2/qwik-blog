import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container/container";
import { DebugGrid } from "~/components/debug-grid/debug-grid";
import { DebugSize } from "~/components/debug-size/debug-size";

export default component$(() => {
  return (
    <div>
      <Container>
        <DebugSize />
        <DebugGrid hidden />

        <div class="bg-red-200">
          <h1>Posts</h1>

          <div>All posts here...</div>
        </div>
      </Container>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Blog with Qwik",
  meta: [
    {
      name: "description",
      content: "Cool blog with Qwik",
    },
  ],
};
