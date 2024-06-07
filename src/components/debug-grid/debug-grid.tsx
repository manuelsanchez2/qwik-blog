import { component$, useStylesScoped$ } from '@builder.io/qwik'
import CSS from './debug-grid.css?inline'

interface DebugGridProps {
  hidden?: boolean
}
export const DebugGrid = component$<DebugGridProps>(({ hidden = false }) => {
  useStylesScoped$(CSS)
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div aria-hidden="true" class={`grid-debug ${hidden ? '!hidden' : ''} `}>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
      <div class="grid-column"></div>
    </div>
  )
})
