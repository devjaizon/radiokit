// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}
interface Radio {
    codec: string | null
    name: string
    favicon: string
    src: string
    uid: string
    tags: string[] | string
    playing?: Boolean
}
