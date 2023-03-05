<script lang="ts">
    import '../theme.postcss'
    import '@skeletonlabs/skeleton/styles/all.css'
    import '../app.postcss'
    import { LightSwitch } from '@skeletonlabs/skeleton'
    import { filter, genres, station } from '../stores/RadioStore'
    import {
        computePosition,
        autoUpdate,
        flip,
        shift,
        offset,
        arrow,
    } from '@floating-ui/dom'

    import {
        AppShell,
        storePopup,
        Drawer,
        drawerStore,
        ListBox,
        ListBoxItem,
    } from '@skeletonlabs/skeleton'
    import Header from '../components/Header.svelte'
    import Footer from '../components/Footer.svelte'

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })

    let listboxValue: string = 'todas'

    $: {
        filter.set(listboxValue)
    }

    const drawerClose = () => drawerStore.close()
</script>

<svelte:head>
    <link
        rel="icon"
        type="image/svg"
        href={$station?.favicon ? $station?.favicon : ''}
    />
</svelte:head>

<Drawer>
    <ListBox rounded="rounded-none">
        <ListBoxItem
            class="capitalize text-center"
            bind:group={listboxValue}
            name="medium"
            value={'todas'}
            on:click={drawerClose}>{'todas'}</ListBoxItem
        >
        {#each $genres.sort() as genre}
            <!-- <option value={genre}>{genre}</option> -->
            <ListBoxItem
                class="capitalize text-center"
                bind:group={listboxValue}
                name="medium"
                value={genre}
                on:click={drawerClose}>{genre}</ListBoxItem
            >
        {/each}
    </ListBox>
</Drawer>

<AppShell>
    <svelte:fragment slot="header"><Header /></svelte:fragment>
    <!-- Left Sidebar Slot -->
    <slot />
    <svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
