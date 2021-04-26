import { useSelector, useDispatch } from 'react-redux'

import {
  // Selectors.
  selectCreatedUrgentCard,
  selectTitle,
  selectDescription,
  // Actions.
  createUrgentTask,
  changeFormValue,
  deleteCard
} from '../../features/cardSlice'



import './UrgentTask.scss'

export function UrgentTask() {
  const dispatch = useDispatch()

  const createdUrgentCard = useSelector(selectCreatedUrgentCard)
  const title = useSelector(selectTitle)
  const desciption = useSelector(selectDescription)
 

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createUrgentTask())
  }
  function handleChangeInput(ev) {
    dispatch(
      changeFormValue({
        name: ev.target.name,
        value: ev.target.value,
      })
    )
  }
  function deleteTask(title, desciption) {
    dispatch(deleteCard(title, desciption))
  }

  return (
    <div>
      <h1>Tareas urgentes</h1>
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
            onClick={() => dispatch(createUrgentTask())}
            className="CardInput__add-button"
          >
            Nueva tarea
          </button>

          <button className="CardInput__cancel-button">Cancelar</button>
        </div>
      </form>
    </div>
      <form onSubmit={handleSubmit} className="urgentTaskInput"></form>
      {createdUrgentCard[0] ? (
        <div className="task">
            <p className="task__title">{createdUrgentCard[0]}</p>
            <p className="task__description">{createdUrgentCard[1]}</p>
            <button type="submit" onClick={() => deleteTask(0,1)}
            className="CardInput__delete-button">Eliminar</button>
        </div>) : null }
      {createdUrgentCard[2] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[2]}</p>
            <p className="task__description">{createdUrgentCard[3]}</p>
            <button type="submit" onClick={() => deleteTask(2,3)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[4] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[4]}</p>
            <p className="task__description">{createdUrgentCard[5]}</p>
            <button type="submit" onClick={() => deleteTask(4,5)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[6] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[6]}</p>
            <p className="task__description">{createdUrgentCard[7]}</p>
            <button type="submit" onClick={() => deleteTask(6,7)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[8] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[8]}</p>
            <p className="task__description">{createdUrgentCard[9]}</p>
            <button type="submit" onClick={() => deleteTask(8,9)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[10] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[10]}</p>
            <p className="task__description">{createdUrgentCard[11]}</p>
            <button type="submit" onClick={() => deleteTask(10,11)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[12] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[12]}</p>
            <p className="task__description">{createdUrgentCard[13]}</p>
            <button type="submit" onClick={() => deleteTask(12,13)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[14] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[14]}</p>
            <p className="task__description">{createdUrgentCard[15]}</p>
            <button type="submit" onClick={() => deleteTask(14,15)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[16] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[16]}</p>
            <p className="task__description">{createdUrgentCard[17]}</p>
            <button type="submit" onClick={() => deleteTask(16,17)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[18] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[18]}</p>
            <p className="task__description">{createdUrgentCard[19]}</p>
            <button type="submit" onClick={() => deleteTask(18,19)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[20] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[20]}</p>
            <p className="task__description">{createdUrgentCard[21]}</p>
            <button type="submit" onClick={() => deleteTask(20,21)}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
    </div>
  )
}
