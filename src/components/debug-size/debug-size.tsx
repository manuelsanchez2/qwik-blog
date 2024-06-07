import { component$ } from '@builder.io/qwik'

interface DebugSizeProps {}
export const DebugSize = component$<DebugSizeProps>(() => {
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <aside
      aria-hidden="true"
      hidden
      aria-label="Debug Tool for checking the current resolution we are in"
      class="size-debug fixed left-0 top-0 z-[200] flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black xs:bg-blue-200 sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"
    >
      <span class="block xs:hidden">all</span>
      <span class="hidden xs:block sm:hidden">xs</span>
      <span class="hidden sm:block md:hidden">sm</span>
      <span class="hidden md:block lg:hidden">md</span>
      <span class="hidden lg:block xl:hidden">lg</span>
      <span class="hidden xl:block 2xl:hidden">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </aside>
  )
})
