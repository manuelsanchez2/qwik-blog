import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { categories } from "~/data/categories";
import { posts } from "~/data/posts";

export default component$(() => {
  return (
    <div>
      {/* List all the categories */}
      <section>
        <h2 class="text-xl font-bold">All categories listed</h2>
        <div class="flex gap-4">
          {categories.map((category) => (
            <div key={category.id}>
              <Link href={`/blog/categories/${category.slug}`}>
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <hr />
      {/* List all the posts */}
      <section>
        <h2 class="text-xl font-bold">All posts listed</h2>
        {posts.map((post) => (
          <div
            class="border border-black my-5 p-5 flex flex-col text-black hover:bg-gray-100"
            key={post.id}
          >
            <Link href={`/blog/posts/${post.slug}`}>
              <h3 class="text-md font-bold">{post.title}</h3>
            </Link>
            <p>{post.summary}</p>
            <p>Created at: {post.createdAt}</p>
            <p>
              Author:{" "}
              <Link href={`/blog/authors/${post.authorSlug}`}>
                {post.author}
              </Link>
            </p>
            <div>
              Categories:
              {post.categories.map((category) => (
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
          </div>
        ))}
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
