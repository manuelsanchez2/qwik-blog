import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { ActionTrigger } from '~/components/action-trigger/action-trigger'
import { Container, ContainerMedium } from '~/components/container/container'
import { DebugGrid } from '~/components/debug-grid/debug-grid'
import { DebugSize } from '~/components/debug-size/debug-size'
import { IconArrowRight } from '~/components/icons/icons'
import {
  VectorBlueVerticalPill,
  VectorLoopArrow,
} from '~/components/vectors/vectors'
import { APP_VERSION } from '~/constants/constants'

export default component$(() => {
  return (
    <div>
      <Container>
        <DebugSize />
        <DebugGrid hidden />

        <ContainerMedium>
          <div class="flex flex-col items-center justify-center min-h-screen gap-10">
            <div class="flex flex-col gap-4 md:flex-row">
              <VectorLoopArrow class="max-w-[200px] h-auto" />
              <VectorBlueVerticalPill class="max-w-[200px] h-auto" />
            </div>
            <ActionTrigger class="btn" title="this would be different">
              <span>See more</span>
              <IconArrowRight />
            </ActionTrigger>
            <ActionTrigger href="https://www.google.de" as="a" class="btn">
              Hola
            </ActionTrigger>
            <ActionTrigger href="https://www.google.de" as="a" class="btn">
              <IconArrowRight />
            </ActionTrigger>
            <ActionTrigger
              class="btn btn--turquoise"
              href="https://www.google.de"
              as="a"
            >
              <IconArrowRight />
            </ActionTrigger>
            <ActionTrigger
              class="btn btn--blue"
              href="https://www.google.de"
              as="a"
            >
              <IconArrowRight />
            </ActionTrigger>
            <ActionTrigger
              class="btn btn--yellow"
              href="https://www.google.de"
              as="a"
            >
              <span>Coolio!</span>
              <IconArrowRight />
            </ActionTrigger>
            <ActionTrigger
              class="btn btn--orange"
              href="https://www.google.de"
              as="a"
            >
              <IconArrowRight />
            </ActionTrigger>
            <ActionTrigger
              class="btn btn--purple"
              href="https://www.google.de"
              as="a"
            >
              <IconArrowRight />
            </ActionTrigger>

            <div class="mb-12">Version {APP_VERSION}</div>
          </div>
          {/* List all the categories */}
          {/* <section>
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
          </section> */}

          {/* List all the posts */}
          {/* <section>
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
                  Author:{' '}
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
                      {' '}
                      {category}{' '}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section> */}
        </ContainerMedium>
      </Container>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Blog with Qwik',
  meta: [
    {
      name: 'description',
      content: 'Cool blog with Qwik',
    },
  ],
}
