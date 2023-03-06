<script context="module" lang="ts">
    export let player: HTMLAudioElement

    const updatePlayer = (src: string) => {
        player.pause()
        player.src = src
        player.load()
        player.play()
    }

    export const setStation = (state: Radio, setter: any) => {
        updatePlayer(state.src)

        setter.update((prevState: Radio) => {
            let newStation = { ...prevState }
            newStation.playing = true

            return newStation
        })
    }

    export const playPause = (state: Radio, setter: any) => {
        state.playing ? player.pause() : updatePlayer(state.src)

        setter.update((prevState: Radio) => {
            let newStation = { ...prevState }
            newStation.playing = !prevState.playing

            return newStation
        })
    }
</script>

<script lang="ts">
    import { station, filter } from '../stores/RadioStore'
    import { onMount } from 'svelte'
    import { drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton'

    onMount(() => {
        player = new Audio('')
        player.volume = 0.5
    })

    const drawerOpen = () => {
        const settings: DrawerSettings = {
            width: 'w-full',
            height: 'h-full',
            padding: 'p-4',
            rounded: 'rounded-sm',
            position: 'bottom',
        }

        drawerStore.open(settings)
        // drawerStore.open()
    }
</script>

/// <reference no-default-lib="true" />

// @ts-nocheck
<footer class="w-full fixed bottom-0 z-1000 bg-white px-7  overflow-hidden">
    <div class="mx-auto max-w-6xl flex justify-between overflow-hidden">
        <div class="flex justify-between text-center h-full align-left ">
            <button
                disabled={$station.src == ''}
                on:click={() => playPause($station, station)}
                class="text-xl mr-5 p-0 "
            >
                <i
                    class={`text-2xl fa ${
                        !$station.playing ? 'fa-play' : 'fa-pause'
                    }`}
                />
            </button>

            {#if player}
                <input
                    class="w-20"
                    min="0"
                    max="1"
                    step="0.1"
                    type="range"
                    bind:value={player.volume}
                />
            {:else}
                <input class="w-20" min="0" max="1" step="0.1" type="range" />
            {/if}
        </div>
        <button class="btn px-0" on:click={drawerOpen}>
            <span class="capitalize text-indigo-400 font-semibold"
                >{$filter ?? 'todas'}</span
            >
            <!-- <i class="fa-solid fa-caret-up opacity-50" /> -->
        </button>
    </div>
</footer>
