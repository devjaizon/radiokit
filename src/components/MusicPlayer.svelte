<script lang="ts">
    import { filter, radios } from '../stores/RadioStore'
    import Card from './Card.svelte'

    let filtered: any = []

    $: {
        if ($filter === 'todas' || $filter === '') {
            filtered = $radios
        } else {
            filtered = $radios.filter((radio: Radio) => {
                if (radio.tags) {
                    return radio.tags.includes($filter)
                }
            })
        }
    }
</script>

<main
    class="w-full flex pb-8  sm:pt-0 pr-2 justify-center overflow-hidden h-[100vh]"
>
    <div class="scroll w-[100vw] overflow-y-scroll overflow-x-hidden pr-3 pl-7">
        <div class="grid grid-cols-body gap-3 max-w-6xl">
            {#if filtered}
                {#each filtered as radio}
                    <Card {radio} />
                {/each}
            {/if}
        </div>
    </div>
</main>

<style>
    /* scroll bar */
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        margin: 1.25rem 0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: transparent;
        box-shadow: inset 1px 1px 3px rgb(136, 164, 255),
            inset -1px -1px 3px rgb(255, 152, 250),
            1px 1px 2px rgb(204, 216, 255), -1px -1px 2px rgb(255, 187, 195);
        border-radius: 10px;
    }
</style>
