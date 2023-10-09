import React, { useMemo } from 'react'
import { getHeroesbyPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    // useMemo para memorizar valores
    const heroes = useMemo(() => getHeroesbyPublisher(publisher), [publisher] );

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
            heroes.map(hero => (
                <HeroCard key={hero.id} {...hero}/>
            ))
            }
        </div>
    )
}
