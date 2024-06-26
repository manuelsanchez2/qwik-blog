import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const links = [
  {
    id: 1,
    title: "Posts",
    url: "/blog/posts/",
  },
  {
    id: 2,
    title: "Categories",
    url: "/blog/categories/",
  },
  {
    id: 3,
    title: "Authors",
    url: "/blog/authors/",
  },
];

export const Header = component$(() => {
  const url = useLocation();
  // console.log(url.url.pathname);

  return (
    <header class="flex flex-col items-center sm:flex-row sm:items-start gap-4 justify-between w-full px-5 py-8 md:px-0">
      <Link
        class={`${url.url.pathname == "/" ? "font-bold" : ""} hover:opacity-70 focus:opacity-70`}
        title="Go to the index page"
        href="/"
      >
        Blog
      </Link>
      <nav class="flex items-center gap-3">
        {links.map((link) => (
          <Link
            key={link.id}
            class={`${url.url.pathname == link.url ? "font-bold" : ""} hover:opacity-70 focus:opacity-70`}
            title={`Go to the ${link.title} page`}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
});
