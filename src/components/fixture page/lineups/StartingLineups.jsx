import React from 'react'
import SoccerLineUp from 'react-soccer-lineup'

export default function StartingLineups() {
    return (
        <div className='p-2'>
            <SoccerLineUp
                size={ "responsive" }
                color={ "lightseagreen" }
                pattern={ "lines" }
                
            />
        </div>
    )
}
