import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Pokedex } from './pages/pokedex'
import { PokemonPage } from '@/pages/pokemon-page/PokemonPage'
import { Map } from './pages/map/Map.tsx'
import { UbicacionPage } from './pages/ubicacion/UbicacionPage.tsx'

const router = createBrowserRouter([
    {
        path: '/aninfo-pokemon',
        element: <App />,
        children: [
            {
                path: 'map',
                element: <Map />
            },
            {
                path: 'combate/:location',
                element: <UbicacionPage />
            },
            {
                path: 'pokedex',
                element: <Pokedex />
            },
            {
                path: 'pokedex/:name',
                element: <PokemonPage />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
