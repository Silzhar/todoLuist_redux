import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    // Selectors.
    selectCreateCard,
    selectTitle,
    selectDescription,
    selectDrawCreateCard,
    // Actions.
    createTask,
    changeFormValue
    } from '../../features/cardSlice'

import {
    // Selectors.
    // selectCreateCardurgent,
    // Actions.
    valuesUrgentTask
    } from '../../features/urgentTaskSlice'

import './Card.scss'

export function Card() {
    const dispatch = useDispatch()
    // carSlice.
    const createCard = useSelector(selectCreateCard)
    const title = useSelector(selectTitle)
    const desciption = useSelector(selectDescription)
    const drawCreateCard = useSelector(selectDrawCreateCard)
    //  urgentTaskSlice.
    // const createCardUrgent = useSelector(selectCreateCardurgent)


    function handleSubmit(event) {
        event.preventDefault()
        dispatch(createTask())
    }

    function handleChangeInput(ev) {
    dispatch(
        changeFormValue({
        name: ev.target.name,
        value: ev.target.value,
        }),
        );
    } 
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="CardInput">
                <input
                type="text"
                name="title"
                placeholder="Título"
                value={title}
                onChange={handleChangeInput}
                />

                <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={desciption}
                onChange={handleChangeInput}
                />


                <div className="CardInput__buttons">
                <button type='submit'
                    onClick={() => (dispatch(valuesUrgentTask(createCard)))}
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
            </form> 
        </div>
    )
}
