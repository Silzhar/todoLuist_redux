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
  // function deleteTask(index, elements) {
  //   dispatch(deleteCard(index, elements))
  // }

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
            onClick={() => (createUrgentTask())}
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
            <button type="submit" onClick={() => (deleteTask(0,2))}
            className="CardInput__delete-button">Eliminar</button>
        </div>) : null }
      {createdUrgentCard[2] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[2]}</p>
            <p className="task__description">{createdUrgentCard[3]}</p>
            <button type="submit" onClick={() => (deleteTask(2,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[4] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[4]}</p>
            <p className="task__description">{createdUrgentCard[5]}</p>
            <button type="submit" onClick={() => (deleteTask(4,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[6] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[6]}</p>
            <p className="task__description">{createdUrgentCard[7]}</p>
            <button type="submit" onClick={() => (deleteTask(6,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[8] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[8]}</p>
            <p className="task__description">{createdUrgentCard[9]}</p>
            <button type="submit" onClick={() => (deleteTask(8,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[10] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[10]}</p>
            <p className="task__description">{createdUrgentCard[11]}</p>
            <button type="submit" onClick={() => (deleteTask(10,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[12] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[12]}</p>
            <p className="task__description">{createdUrgentCard[13]}</p>
            <button type="submit" onClick={() => (deleteTask(12,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[14] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[14]}</p>
            <p className="task__description">{createdUrgentCard[15]}</p>
            <button type="submit" onClick={() => (deleteTask(14,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[16] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[16]}</p>
            <p className="task__description">{createdUrgentCard[17]}</p>
            <button type="submit" onClick={() => (deleteTask(16,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[18] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[18]}</p>
            <p className="task__description">{createdUrgentCard[19]}</p>
            <button type="submit" onClick={() => (deleteTask(18,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
      {createdUrgentCard[20] ? (
          <div className="task">
            <p className="task__title">{createdUrgentCard[20]}</p>
            <p className="task__description">{createdUrgentCard[21]}</p>
            <button type="submit" onClick={() => (deleteTask(20,2))}
            className="CardInput__delete-button">Eliminar</button>
          </div>  
      ) : null}
    </div>
  )
}
