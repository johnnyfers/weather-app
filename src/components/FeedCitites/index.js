import React from 'react'
import { CityItem } from '../CityItem/index'

export function FeedCitites(props) {
    
    return (
        <>
            {props.feedCitites && props.feedCitites.map((item) =>
                <CityItem
                    key={Math.random()}
                    city={item.city_name}
                    code={item.state_code}
                    country={item.country}
                    latitude={item.lat}
                    longitude={item.lng}
                />
            )}
        </>)
}