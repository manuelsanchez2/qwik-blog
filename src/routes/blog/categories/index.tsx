import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Container, ContainerSmall } from "~/components/container/container";
import { DebugGrid } from "~/components/debug-grid/debug-grid";
import { DebugSize } from "~/components/debug-size/debug-size";
import { technologies } from "~/constants/technologies";
import { stagger, timeline, type TimelineDefinition } from "motion";

export default component$(() => {
  const transformed_categories = technologies.map((category) => {
    return Object.values(category);
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const categories = document.querySelectorAll("li");
    if (!categories) return;

    const sequence: TimelineDefinition = [
      [
        categories,
        { opacity: [0, 1], y: [-50, 0] },
        { duration: 0.3, delay: stagger(0.1) },
      ],
    ];

    timeline(sequence, {});
  });

  return (
    <div>
      <Container>
        <DebugSize />
        <DebugGrid hidden />

        <ContainerSmall>
          <h1 class="text-3xl font-bold text-center my-12">All Categories</h1>

          <nav aria-label="All the categories displayed">
            <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
              {transformed_categories.map((category) => {
                return category.map((tech) => {
                  return (
                    <li
                      class="flex flex-col gap-3 items-center text-center opacity-0"
                      key={tech.id}
                    >
                      <a
                        title={tech.name}
                        class={`btn btn--${tech.color} cursor-pointer [&>svg]:scale-75`}
                        href={`/blog/categories/${tech.name.toLowerCase()}`}
                      >
                        {tech.icon()}
                      </a>
                      <small class="font-bold text-lg">{tech.name}</small>
                    </li>
                  );
                });
              })}
            </ul>
          </nav>
        </ContainerSmall>
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
