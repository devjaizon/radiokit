// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
    const loadRadios = async () => {
        const res = await fetch(
            'https://nl1.api.radio-browser.info/json/stations/search?countrycode=BR&hidebroken=true&order=clickcount&reverse=true'
        )

        return res.json()
    }

    const radios = await loadRadios()

    const allRadios = radios.reduce((res: Radio[], radio: Radio) => {
        if (
            (radio.codec === 'MP3' || 'AAC' || 'AAC+') &&
            radio.stationuuid !== null &&
            radio.favicon !== null
        ) {
            if (!res.find((item) => item.src === radio.url)) {
                res.push({
                    codec: radio.codec,
                    name: radio.name,
                    favicon: radio.favicon,
                    src: radio.url,
                    uid: radio.stationuuid,
                    // since there are multiple tags and language cods in some station I used a regex to separate them into an array
                    tags: radio.tags.match(/[^,\s]+/g),
                    playing: false,
                })
            }
        }
        return res
    }, [])

    const allGenres = allRadios.reduce((res: String[], radio: Radio) => {
        if (radio.tags) {
            for (const tag of radio.tags) {
                let count = 0
                // loop through each radio in allRadios and add a count for each time that specific tag apeears in a radio
                allRadios?.forEach((r) => {
                    if (r.tags?.includes(tag)) {
                        count++
                    }
                })
                // if it appears at leas 7 times include it in the list
                if (count >= 7 && !res.includes(tag)) res.push(tag)
            }
        }

        return res
    }, [])

    return {
        radios: allRadios,
        genres: allGenres,
    }
}
