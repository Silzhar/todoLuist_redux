import { useSelector, useDispatch } from 'react-redux';

import {
    // Selectors.
    selectTitle,
    selectDescription,
    selectCreatedRemainingCard,
    // Actions.
    createRemainingTask,
    changeFormValue,
  } from '../../features/cardSlice';

  import './RemainingTask.scss'

export function RemainingTask() {
    const dispatch = useDispatch()

  const createdRemainingCard = useSelector(selectCreatedRemainingCard)
  const title = useSelector(selectTitle)
  const desciption = useSelector(selectDescription)
 

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createRemainingTask());
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
      <h1>Tareas pendientes</h1>
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
            onClick={() => dispatch(createRemainingTask())}
            className="CardInput__add-button"
          >
            Nueva tarea
          </button>

          <button className="CardInput__cancel-button">Cancelar</button>
        </div>
      </form>
    </div>
      <form onSubmit={handleSubmit} className="urgentTaskInput"></form>
      {createdRemainingCard[0] ? (
        <div className="task">
            <p className="task__title">{createdRemainingCard[0]}</p>
            <p className="task__description">{createdRemainingCard[1]}</p>
        </div>) : null }
      {createdRemainingCard[2] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[2]}</p>
            <p className="task__description">{createdRemainingCard[3]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[4] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[4]}</p>
            <p className="task__description">{createdRemainingCard[5]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[6] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[6]}</p>
            <p className="task__description">{createdRemainingCard[7]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[8] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[8]}</p>
            <p className="task__description">{createdRemainingCard[9]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[10] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[10]}</p>
            <p className="task__description">{createdRemainingCard[11]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[12] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[12]}</p>
            <p className="task__description">{createdRemainingCard[13]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[14] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[14]}</p>
            <p className="task__description">{createdRemainingCard[15]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[16] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[16]}</p>
            <p className="task__description">{createdRemainingCard[17]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[18] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[18]}</p>
            <p className="task__description">{createdRemainingCard[19]}</p>
          </div>  
      ) : null}
      {createdRemainingCard[20] ? (
          <div className="task">
            <p className="task__title">{createdRemainingCard[20]}</p>
            <p className="task__description">{createdRemainingCard[21]}</p>
          </div>  
      ) : null}
    </div>
    )
}
