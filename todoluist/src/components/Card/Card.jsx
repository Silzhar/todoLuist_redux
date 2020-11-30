import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    // Selectors.
    selectCreateCard,
    // Actions.
} from '../../features/cardSlice'

import './Card.scss'

export function Card() {
    const dispatch = useDispatch()

    const createCard = useSelector(selectCreateCard)
    
    return (
        <div className="CardInput">
            <input
            type="text"
            name="title"
            placeholder="Título"
            value=''
            onChange=''
            />
            <input
            type="text"
            name="description"
            placeholder="Descripción"
            value=''
            onChange=''
            />


            <div className="CardInput__buttons">
            <button
                onClick={() => (createCard())}
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
