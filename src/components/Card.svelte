<script lang="ts">
    import { station } from '../stores/RadioStore'
    import { player, playPause, setStation } from './Footer.svelte'

    export let radio: Radio

    const handleClick = () => {
        if (player) {
            $station.src !== player.src
                ? (setStation($station, station), station.set(radio))
                : playPause($station, station)
        }
    }
</script>

<button on:click={handleClick}>
    <div
        class={`card variant-soft-primary  ${
            $station.src === radio.src && 'selected-radio '
        } hover:scale-105 py-2 h-full flex items-center justify-center`}
    >
        {radio.name}
    </div>
</button>

<style>
</style>
