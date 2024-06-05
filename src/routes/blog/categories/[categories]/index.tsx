import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation, useNavigate } from "@builder.io/qwik-city";
import { getPostsByCategoryName } from "~/utils";

export const usePostsByCategory = routeLoader$(({ params }) => {
  try {
    return getPostsByCategoryName(params.categories);
  } catch (error) {
    console.error("An error occurred while fetching category posts", error);
    return [];
  }
});

export default component$(() => {
  const location = useLocation();
  const nav = useNavigate();
  const { value: categoryPosts } = usePostsByCategory();

  if (categoryPosts.length < 1)
    return (
      <div>
        <h1>Leider slider, gibt es kein Category Posts so...</h1>
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

      <h1>
        Category:{" "}
        <span class="capitalize font-bold">{location.params.categories}</span>
      </h1>
      <div>Todos estos son los post disponibles en esta categoria</div>
      <ul>
        {categoryPosts.map((post) => (
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
