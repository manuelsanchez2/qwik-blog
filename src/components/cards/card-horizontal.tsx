import { component$ } from "@builder.io/qwik";
import { ActionTrigger } from '~/components/action-trigger/action-trigger'
import { IconArrowRight } from '~/components/icons/icons'

export const CardHorizontal = component$(() => {


    return (
        <div class="border-black shadow-dark rounded-3xl gap-6 border-[3px] h-[350px] p-6 flex justify-between">
            <img class="rounded-2xl w-1/2" src="src\components\placeholderImg\man-smiling.png" />
            <div class="flex flex-col w-1/2 gap-2">
                <ul class="flex gap-4">
                    <li class="border-[3px] rounded-xl px-2 py-2 bg-blogYellowPrimary border-blogYellowDark">JavaScript</li>
                    <li class="border-[3px] rounded-xl px-2 py-2 bg-blogOrangePrimary border-blogOrangeDark">HTML</li>
                </ul>
                <h1 class="font-bold text-3xl">
                ¿Por qué forEach es más rápido que for en JavaScript?
                </h1>
                <h2 class="font-semibold text-lg">
                Mucha gente cree, de forma equivocada, que for es la forma más rápida de hacer bucles en JavaScript...
                </h2>
                <div class="flex w-full mt-6 px-4 justify-between items-center">
                    <div class="flex gap-2">
                        <img class="roundend-full" src="" />
                        <div class="flex flex-col gap-2">
                            <h3 class="text-sm font-bold">
                                Manuel Sanchez
                            </h3>
                            <h4 class="font-light text-sm">
                                Sat 4, March 2024
                            </h4>
                        </div>
                    </div>
                    
                    <ActionTrigger href="https://www.google.de" as="a" class="btn">
                        <IconArrowRight />
                    </ActionTrigger>
                </div>
            </div>
        </div>
    )
})