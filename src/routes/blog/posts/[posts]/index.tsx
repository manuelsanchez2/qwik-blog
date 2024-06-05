import { component$, Slot } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { getAuthorBySlug, getPostBySlug } from "~/utils";

export const usePostsBySlug = routeLoader$(({ params }) => {
  try {
    return getPostBySlug(params.posts);
  } catch (error) {
    console.error("An error occurred while fetching posts", error);
    return [];
  }
});

export const useAuthorBySlug = routeLoader$(({ params }) => {
  try {
    return getAuthorBySlug(getPostBySlug(params.posts).authorSlug);
  } catch (error) {
    console.error("An error occurred while fetching author by slug", error);
    return [];
  }
});

export default component$(() => {
  const { value: post } = usePostsBySlug();
  const { value: author } = useAuthorBySlug();

  return (
    <div>
      <h1>
        Title of the post: <strong>{post.title}</strong>
      </h1>
      <img width={200} height={200} src={author.imgSrc} alt="" />
      <p>Summary: {post.summary}</p>
      <time>Created at: {post.createdAt}</time>
      <div>Author: {post.author || author.name}</div>
      <div>
        Categories:
        {post.categories.map((category: string) => (
          <Link
            key={category}
            class="pill border border-black mx-2 rounded-md p-1 hover:bg-gray-300"
            href={`/blog/categories/${category}`}
          >
            {" "}
            {category}{" "}
          </Link>
        ))}
      </div>
      <Slot />
    </div>
  );
});
