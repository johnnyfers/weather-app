import React from 'react'
import { CityItem } from '../CityItem/index'

const feedCitites = [
    {
        city: 'São Paulo',
        code: 'SP',
        country: 'BRAZIL',
        latitude: '-23.5506507',
        longitude: '-46.6333824'
    },
    {
        city: 'Rio de Janeiro',
        code: 'RJ',
        country: 'BRAZIL',
        latitude: '-22.9110137',
        longitude: '-43.2093727'
    },
    {
        city: 'Brasília',
        code: 'DF',
        country: 'BRAZIL',
        latitude: '-10.3333333',
        longitude: '-53.2'
    },
    {
        city: 'Salvador',
        code: 'BA',
        country: 'BRAZIL',
        latitude: '-12.9822499',
        longitude: '-38.4812772'
    },
    {
        city: 'Fortaleza',
        code: 'CE',
        country: 'BRAZIL',
        latitude: '-3.7304512',
        longitude: '-38.5217989'
    },
]

export function FeedCitites() {
    return (
        <>
            {feedCitites.length > 0 && feedCitites.map((item) =>
                <CityItem
                    key={Math.random()}
                    city={item.city}
                    code={item.code}
                    country={item.country}
                    latitude={item.latitude}
                    longitude={item.longitude}
                />
            )}
        </>)
}