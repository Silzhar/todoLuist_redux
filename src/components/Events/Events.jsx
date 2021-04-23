import { useSelector, useDispatch } from 'react-redux'

import {
  // Selectors.
  selectCreatedeventsCard,
  selectTitle,
  selectDescription,
  // Actions.
  createNextEvents,
  changeFormValue,
} from '../../features/cardSlice'

import './Events.scss'

export function Events() {
  const dispatch = useDispatch()

  const createdEventsCard = useSelector(selectCreatedeventsCard)
  const title = useSelector(selectTitle)
  const desciption = useSelector(selectDescription)
 

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createNextEvents());
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
      <h1>Próximos eventos</h1>
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
            onClick={() => dispatch(createNextEvents())}
            className="CardInput__add-button"
          >
            Nueva tarea
          </button>

          <button className="CardInput__cancel-button">Cancelar</button>
        </div>
      </form>
    </div>
      <form onSubmit={handleSubmit} className="urgentTaskInput"></form>
      {createdEventsCard[0] ? (
        <div className="task">
            <p className="task__title">{createdEventsCard[0]}</p>
            <p className="task__description">{createdEventsCard[1]}</p>
        </div>) : null }
      {createdEventsCard[2] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[2]}</p>
            <p className="task__description">{createdEventsCard[3]}</p>
          </div>  
      ) : null}
      {createdEventsCard[4] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[4]}</p>
            <p className="task__description">{createdEventsCard[5]}</p>
          </div>  
      ) : null}
      {createdEventsCard[6] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[6]}</p>
            <p className="task__description">{createdEventsCard[7]}</p>
          </div>  
      ) : null}
      {createdEventsCard[8] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[8]}</p>
            <p className="task__description">{createdEventsCard[9]}</p>
          </div>  
      ) : null}
      {createdEventsCard[10] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[10]}</p>
            <p className="task__description">{createdEventsCard[11]}</p>
          </div>  
      ) : null}
      {createdEventsCard[12] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[12]}</p>
            <p className="task__description">{createdEventsCard[13]}</p>
          </div>  
      ) : null}
      {createdEventsCard[14] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[14]}</p>
            <p className="task__description">{createdEventsCard[15]}</p>
          </div>  
      ) : null}
      {createdEventsCard[16] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[16]}</p>
            <p className="task__description">{createdEventsCard[17]}</p>
          </div>  
      ) : null}
      {createdEventsCard[18] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[18]}</p>
            <p className="task__description">{createdEventsCard[19]}</p>
          </div>  
      ) : null}
      {createdEventsCard[20] ? (
          <div className="task">
            <p className="task__title">{createdEventsCard[20]}</p>
            <p className="task__description">{createdEventsCard[21]}</p>
          </div>  
      ) : null}
    </div>
  )
}
