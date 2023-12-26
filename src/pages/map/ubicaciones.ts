export interface Ubicacion {
    name: string
    top: string
    left: string
    image: string
    description: string
    path: string
    real_pokemon_location: string
}

export const ubicaciones: Ubicacion[] = [
    {
        name: 'Montaña Escarchada',
        path: '/montania_escarchada',
        top: '27%',
        left: '22%',
        image: '/ubicaciones/montaña_escarchada.jpg',
        description: 'Zona de peligro, se avistan pokémones de tipo Hielo, Agua y Aire',
        real_pokemon_location: 'ice-path-1f'
    },
    {
        name: 'Valle rocoso',
        path: '/valle_rocoso',
        top: '60%',
        left: '55%',
        image: '/ubicaciones/valle_rocozo.jpg',
        description: 'En esta zona montañosa se encuentran pokémones de tipo Tierra y Normal',
        real_pokemon_location: 'rock-tunnel-1f'
    },
    {
        name: 'Costas Turbulentas',
        path: '/costas_turbulentas',
        top: '83%',
        left: '28%',
        image: '/ubicaciones/costas_turbulentas.jpg',
        description: 'Sinuosas aguas donde se observan pokémones de tipo Agua y Aire',
        real_pokemon_location: 'whirl-islands-1f'
    },
    {
        name: 'Bosque Tupido',
        path: '/bosque_tupido',
        top: '10%',
        left: '70%',
        image: '/ubicaciones/bosque_tupido.jpg',
        description: 'Bosque abundante de flora y fauna. Hay varios pokémones de tipo Planta y Normal',
        real_pokemon_location: 'ilex-forest-area'
    },
    {
        name: 'Ciudad Plateada',
        path: '/ciudad_plateada',
        real_pokemon_location: 'saffron-city',
        top: '75%',
        left: '50%',
        image: 'ubicaciones/city.jpg',
        description: 'Todo puede pasar. ¡Aquí puedes toparte con cualquier tipo de pokémon!'
    },
    {
        name: 'Volcan',
        path: '/volcan',
        real_pokemon_location: 'mt-ember-cave',
        top: '45%',
        left: '10%',
        image: '/ubicaciones/volcan.jpg',
        description: 'Zona muy calurosa. ¡Hábitat natural para pokémones de tipo Fuego, Roca y Dragon!'
    },
    {
        name: 'Arena de combate',
        path: '/arena',
        real_pokemon_location: 'kanto-safari-zone',
        top: '50%',
        left: '47%',
        image: '/ubicaciones/arena.jpg',
        description: 'Zona de combate. ¡Aqui puedes pelear contra pokémones de cualquier tipo!'
    },
    {
        name: 'Cueva tenebrosa',
        path: '/cueva_tenebrosa',
        real_pokemon_location: 'mt-pyre',
        top: '10%',
        left: '46%',
        image: '/ubicaciones/cueva.jpg',
        description: 'Cueva oscura donde puedes encontrarte pokémones de tipo Fantasma y Siniestro'
    }
]
