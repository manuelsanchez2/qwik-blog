import { $, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";

export function useWindowWidth() {
  const windowWidth = useSignal(isServer ? 0 : window.innerWidth);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    windowWidth.value = window.innerWidth;
  });

  useOnWindow(
    "resize",
    $(() => {
      console.log("resizing");
      windowWidth.value = window.innerWidth;
    }),
  );

  // Return the debouncedSig
  return windowWidth;
}
