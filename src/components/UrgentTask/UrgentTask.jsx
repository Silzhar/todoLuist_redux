import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../Card'
import {
    // Selectors.
    selectCreateCard,
    selectDrawCreateCard
    // Actions.
} from '../../features/cardSlice'

import {
    // Selectors.
    // selectCreateCardurgent,
    // Actions.
    valuesUrgentTask
    } from '../../features/urgentTaskSlice'

import './UrgentTask.scss'

export function UrgentTask() {
    const dispatch = useDispatch()

    const createCard = useSelector(selectCreateCard)
    const drawCreateCard = useSelector(selectDrawCreateCard)

    function handleSubmit() {
        dispatch(valuesUrgentTask(createCard))
    }
    
    return (
        <div>
            <h1>Tareas urgentes</h1>
            <Card />
            <form onSubmit={handleSubmit} className="CardInput">

            </form>
            {drawCreateCard  ? (
                    <div className="task">
                        {createCard}
                    </div>
                ): null}
        </div>
        
    )
}
