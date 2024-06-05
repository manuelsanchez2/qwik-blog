import { component$ } from "@builder.io/qwik";
import { Link, loader$, useNavigate } from "@builder.io/qwik-city";
import { getAuthorBySlug, getPostsByAuthor } from "~/utils";

export const usePostsByAuthor = loader$(({ params }) => {
  try {
    return getPostsByAuthor(params.authors);
  } catch (error) {
    console.error("An error occurred while fetching posts by author", error);
    return [];
  }
});

export const useAuthorBySlug = loader$(({ params }) => {
  try {
    return getAuthorBySlug(params.authors);
  } catch (error) {
    console.error("An error occurred while fetching author by slug", error);
    return [];
  }
});

export default component$(() => {
  const nav = useNavigate();
  const { value: authorPosts } = usePostsByAuthor();
  const { value: author } = useAuthorBySlug();

  if (authorPosts.length < 1)
    return (
      <div>
        <h1>Leider slider, gibt es kein Post von diesem Author so...</h1>
        <button
          class="border border-black p-2 bg-gray-200"
          onClick$={() => nav("/")}
        >
          Back Buttonchen
        </button>
      </div>
    );

  return (
    <div>
      <button
        class="border border-black p-2 my-2 bg-gray-200"
        onClick$={() => nav("/")}
      >
        Back Buttonchen
      </button>
      <h1>Author: {author.name}</h1>
      <img src={author.imgSrc} alt={author.name} />
      <div>Todos estos son los posts que ha escrito {author.name}</div>
      <ul>
        {authorPosts.map((post) => (
          <Link
            href={`/blog/posts/${post.slug}`}
            class="border border-black my-5 p-5 flex flex-col text-black hover:bg-gray-100"
            key={post.id}
          >
            <h3 class="text-md font-bold">{post.title}</h3>
            <p>{post.summary}</p>
            <p>Created at: {post.createdAt}</p>
            <p>Author: {post.author}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
});
