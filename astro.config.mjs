// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
     site: 'https://cloud-machine-111.github.io',
     base: '',

    fonts: [{
        provider: fontProviders.local(),
        name: "AveriaSerifLibre",
        cssVariable: "--font-averia-serif-libre",
        options: {
            variants: [{
                src: ['./src/assets/fonts/Averia_Serif_Libre/AveriaSerifLibre-Regular.ttf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    },
]

});


