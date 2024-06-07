import { Slot, component$ } from '@builder.io/qwik'

export const Container = component$(() => {
  return (
    <div class="container mx-auto p-5 max-w-large">
      <Slot />
    </div>
  )
})

export const ContainerMedium = component$(() => {
  return (
    <div class="mx-auto max-w-medium">
      <Slot />
    </div>
  )
})
