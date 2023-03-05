import { writable, type Writable } from 'svelte/store'

export const station = writable<Radio>({
    codec: 'MP3',
    name: 'Hunter FM - SERTANEJO',
    favicon: 'https://hunter.fm/_nuxt/icons/icon_64x64.dc6558.png',
    src: 'https://live.hunter.fm/sertanejo_high',
    uid: '970284e1-e8df-4104-9016-199a615e280a',
    tags: ['folk', 'sertanejo'],
    playing: false,
})

export const filter = writable<string>('')

export const radios = writable([])
export const genres = writable<string[]>([])
