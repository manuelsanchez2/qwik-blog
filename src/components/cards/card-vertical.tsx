import { component$ } from "@builder.io/qwik";
import { ActionTrigger } from "~/components/action-trigger/action-trigger";
import { IconArrowRight } from "~/components/icons/icons";
import { getTechnologyByKey } from "~/constants/technologies";
import { getAuthorById } from "~/utils";
import { type ICard } from "~/types";

export const CardVertical = component$<ICard>(
  ({
    title,
    description,
    author,
    imgSrc,
    imgAlt,
    publishedDate,
    tags,
    slug,
  }) => {
    const authorData = getAuthorById(author);
    if (!authorData) return null;

    return (
      <div class="border-black  shadow-dark rounded-3xl gap-6 border-[3px] max-w-[500px] w-full p-6 flex flex-col justify-between">
        <img
          width={600}
          height={300}
          class="rounded-2xl"
          src={imgSrc}
          alt={imgAlt}
        />
        <div class="flex flex-col w-full gap-2">
          <ul class="flex gap-4">
            {tags.map((tag) => {
              const technology = getTechnologyByKey(tag.toLowerCase());
              if (!technology) return null;
              return (
                <li
                  class={
                    "border-[3px] rounded-xl px-2 py-2 font-semibold" +
                    technology.tagClasses
                  }
                  key={technology.id}
                >
                  {technology.name}
                </li>
              );
            })}
          </ul>
          <h3 class="font-bold font-sans text-4xl leading-[3.5rem]">{title}</h3>
          <div class="font-semibold line-clamp-3 text-lg">{description}</div>
          <div class="flex w-full mt-6 px-4 justify-between items-center">
            <div class="flex gap-2">
              <a
                title={"See more about" + authorData.name}
                href={`/blog/authors/${authorData.slug}`}
              >
                <img
                  width={50}
                  height={50}
                  class="rounded-full"
                  src={authorData.imgSrc}
                  alt={authorData.name + "image"}
                />
              </a>
              <div class="flex flex-col gap-2">
                <a
                  href={`/blog/authors/${authorData.slug}`}
                  title={"See more about" + authorData.name}
                  class="text-sm font-bold"
                >
                  {authorData.name}
                </a>
                <div class="font-light text-sm">{publishedDate}</div>
              </div>
            </div>

            <ActionTrigger href={`/blog/posts/${slug}`} as="a" class="btn">
              Read more
              <IconArrowRight />
            </ActionTrigger>
          </div>
        </div>
      </div>
    );
  },
);
