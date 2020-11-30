import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    // Selectors.
    selectCreateCard,
    selectTitle,
    selectDescription,

    // Actions.
    createTask,
} from '../../features/cardSlice'

import './Card.scss'

export function Card() {
    const dispatch = useDispatch()

    const createCard = useSelector(selectCreateCard)
    const title = useSelector(selectTitle)
    const desciption = useSelector(selectDescription)
    
    return (
        <div className="CardInput">
            <input
            type="text"
            name="title"
            placeholder="Título"
            value={title}
            />

            <input
            type="text"
            name="description"
            placeholder="Descripción"
            value={desciption}  
            />


            <div className="CardInput__buttons">
            <button
                onClick={() => dispatch(createTask())}
                // disabled={() => ()}
                className="CardInput__add-button"
            >
                Nueva tarea
            </button>

            {/* enabled: pinta siempre.
                disabled: funciona pero anula acción de cancelar. */}
            <button
                // onClick={() => ()}
                // enabled={() => ()}
                className="CardInput__cancel-button"
            >
                Cancelar
            </button>
            </div>
        </div>
    )
}
