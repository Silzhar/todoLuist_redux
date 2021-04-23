import { useSelector, useDispatch } from 'react-redux'

import {
  // Selectors.
  selectCreatedNotesCard,
  selectTitle,
  selectDescription,
  // Actions.
  createNotes,
  changeFormValue,
} from '../../features/cardSlice'

import './Notes.scss'

export function Notes() {
    const dispatch = useDispatch()

    const createdNotes = useSelector(selectCreatedNotesCard)
    const title = useSelector(selectTitle)
    const desciption = useSelector(selectDescription)
   
  
    function handleSubmit(event) {
      event.preventDefault();
      dispatch(createNotes());
    }
    function handleChangeInput(ev) {
      dispatch(
        changeFormValue({
          name: ev.target.name,
          value: ev.target.value,
        })
      )
    }
  
    return (
      <div>
        <h1>Notas</h1>
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
            <button
              type="submit"
              onClick={() => dispatch(createNotes())}
              className="CardInput__add-button"
            >
              Nueva tarea
            </button>
  
            <button className="CardInput__cancel-button">Cancelar</button>
          </div>
        </form>
      </div>
        <form onSubmit={handleSubmit} className="urgentTaskInput"></form>
        {createdNotes[0] ? (
          <div className="task">
              <p className="task__title">{createdNotes[0]}</p>
              <p className="task__description">{createdNotes[1]}</p>
          </div>) : null }
        {createdNotes[2] ? (
            <div className="task">
              <p className="task__title">{createdNotes[2]}</p>
              <p className="task__description">{createdNotes[3]}</p>
            </div>  
        ) : null}
        {createdNotes[4] ? (
            <div className="task">
              <p className="task__title">{createdNotes[4]}</p>
              <p className="task__description">{createdNotes[5]}</p>
            </div>  
        ) : null}
        {createdNotes[6] ? (
            <div className="task">
              <p className="task__title">{createdNotes[6]}</p>
              <p className="task__description">{createdNotes[7]}</p>
            </div>  
        ) : null}
        {createdNotes[8] ? (
            <div className="task">
              <p className="task__title">{createdNotes[8]}</p>
              <p className="task__description">{createdNotes[9]}</p>
            </div>  
        ) : null}
        {createdNotes[10] ? (
            <div className="task">
              <p className="task__title">{createdNotes[10]}</p>
              <p className="task__description">{createdNotes[11]}</p>
            </div>  
        ) : null}
        {createdNotes[12] ? (
            <div className="task">
              <p className="task__title">{createdNotes[12]}</p>
              <p className="task__description">{createdNotes[13]}</p>
            </div>  
        ) : null}
        {createdNotes[14] ? (
            <div className="task">
              <p className="task__title">{createdNotes[14]}</p>
              <p className="task__description">{createdNotes[15]}</p>
            </div>  
        ) : null}
        {createdNotes[16] ? (
            <div className="task">
              <p className="task__title">{createdNotes[16]}</p>
              <p className="task__description">{createdNotes[17]}</p>
            </div>  
        ) : null}
        {createdNotes[18] ? (
            <div className="task">
              <p className="task__title">{createdNotes[18]}</p>
              <p className="task__description">{createdNotes[19]}</p>
            </div>  
        ) : null}
        {createdNotes[20] ? (
            <div className="task">
              <p className="task__title">{createdNotes[20]}</p>
              <p className="task__description">{createdNotes[21]}</p>
            </div>  
        ) : null}
      </div>
    )
}
