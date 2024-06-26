import { component$ } from "@builder.io/qwik";
import type { ICard } from "~/types";
import { CardHorizontal } from "~/components/cards/card-horizontal";
import { CardVertical } from "~/components/cards/card-vertical";

interface ICardWithLayout extends ICard {
  layout: "horizontal" | "vertical";
}

export const Card = component$<ICardWithLayout>(
  ({
    title,
    description,
    author,
    imgSrc,
    imgAlt,
    publishedDate,
    tags,
    slug,
    layout,
  }) => {
    return (
      <>
        {layout === "horizontal" ? (
          <CardHorizontal
            title={title}
            description={description}
            author={author}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            publishedDate={publishedDate}
            tags={tags}
            slug={slug}
          />
        ) : (
          <CardVertical
            title={title}
            description={description}
            author={author}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            publishedDate={publishedDate}
            tags={tags}
            slug={slug}
          />
        )}
      </>
    );
  },
);
