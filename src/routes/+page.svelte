<script lang="ts">
  import { onMount } from 'svelte'
  import { genres, radios } from '../stores/RadioStore'

  import MusicPlayer from '../components/MusicPlayer.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  onMount(async () => {
    radios.set(data.radios)
    genres.set(data.genres)
  })
</script>

<MusicPlayer />
