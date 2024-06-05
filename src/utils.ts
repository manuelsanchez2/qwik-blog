import { authors } from "./data/authors";
import { categories } from "./data/categories";
import { posts } from "./data/posts";

/**
 *
 * Functions to get posts
 */

// √ get all posts that have a certain category name
export function getPostsByCategoryName(categoryName: string): Array<any> {
  return posts.filter((post) => post.categories.includes(categoryName));
}

export function getPostsByAuthor(author: string): Array<any> {
  return posts.filter((post) => post.authorSlug.includes(author));
}

// get all post information through just the slug
export function getPostBySlug(slug: string): any | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAuthorBySlug(slug: string): any | undefined {
  return authors.find((author) => author.slug === slug);
}

/**
 *
 * Functions to get categories
 */

export function getCategoryBySlug(slug: string): any | undefined {
  return categories.find((category) => category.slug === slug);
}

// import { getPostsByCategoryId, getPostBySlug } from "./utils";

// // get all posts with category id = 1
// const postsWithCategoryId1 = getPostsByCategoryId(1);

// // get post with slug = "post-1"
// const postWithSlugPost1 = getPostBySlug("post-1");

// import { getCategoryBySlug } from "./utils";

// // get category object with slug = "technology"
// const categoryWithSlugTechnology = getCategoryBySlug("technology");
