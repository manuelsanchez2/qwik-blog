import { type QwikIntrinsicElements, Slot, component$ } from '@builder.io/qwik'

export type ButtonProps<C extends keyof QwikIntrinsicElements> =
  QwikIntrinsicElements[C] & {
    as?: C
  }

export const ActionTrigger = component$(
  <C extends keyof QwikIntrinsicElements>(props: ButtonProps<C>) => {
    const Component = (props.as ?? 'button') as string
    return (
      <Component {...props}>
        <Slot />
      </Component>
    )
  }
)
