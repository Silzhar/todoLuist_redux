import React from 'react'
import { useSelector} from 'react-redux'

import { Card } from '../Card'
import {
    // Selectors.
    selectCreateCard,
    selectDrawCreateCard
    // Actions.
} from '../../features/cardSlice'

import './UrgentTask.scss'

export function UrgentTask() {
    const createCard = useSelector(selectCreateCard)
    const drawCreateCard = useSelector(selectDrawCreateCard)
    
    return (
        <div>
            <h1>Tareas urgentes</h1>
            <Card />

            {drawCreateCard  ? (
                    <div className="task">
                        {createCard}
                    </div>
                ): null}
        </div>
        
    )
}
