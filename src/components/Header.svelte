<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton'
    import { station } from '../stores/RadioStore'
</script>

<AppBar class="overflow-hidden  px-7">
    <svelte:fragment slot="headline">
        <h2 class="text-indigo-400 text-center">
            {$station.name ? $station.name : 'RadioKit'}
        </h2>
    </svelte:fragment>
</AppBar>
