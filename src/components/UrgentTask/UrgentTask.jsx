import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '../Card';
import {
  // Selectors.
  selectCreateCard,
  selectDrawCreateCard,
  selectCreatedUrgentCard,
  selectCardList,
  // Actions.
  createUrgentTask,
} from '../../features/cardSlice';

import {
  // Selectors.
  // selectCreateCardurgent,
  // Actions.
  valuesUrgentTask,
} from '../../features/urgentTaskSlice';

import './UrgentTask.scss';

export function UrgentTask() {
  const dispatch = useDispatch();

  const createCard = useSelector(selectCreateCard);
  const urgentTask = useSelector(selectCreatedUrgentCard)
  const drawCreateCard = useSelector(selectDrawCreateCard);
  const cardList = useSelector(selectCardList)

  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(valuesUrgentTask(createCard));
    dispatch(createUrgentTask());
  }

  return (
    <div>
      <h1>Tareas urgentes</h1>
      <Card />
      <form onSubmit={handleSubmit} className="urgentTaskInput"></form>
      {createCard[0] ? (
        <div className="task">
            <p className="task__title">{createCard[0]}</p>
            <p className="task__description">{createCard[1]}</p>
        </div>) : null }
      {createCard[2] ? (
          <div className="task">
            <p className="task__title">{createCard[2]}</p>
            <p className="task__description">{createCard[3]}</p>
          </div>  
      ) : null}
      {createCard[4] ? (
          <div className="task">
            <p className="task__title">{createCard[4]}</p>
            <p className="task__description">{createCard[5]}</p>
          </div>  
      ) : null}
      {createCard[6] ? (
          <div className="task">
            <p className="task__title">{createCard[6]}</p>
            <p className="task__description">{createCard[7]}</p>
          </div>  
      ) : null}
      {createCard[8] ? (
          <div className="task">
            <p className="task__title">{createCard[8]}</p>
            <p className="task__description">{createCard[9]}</p>
          </div>  
      ) : null}
      {createCard[10] ? (
          <div className="task">
            <p className="task__title">{createCard[10]}</p>
            <p className="task__description">{createCard[11]}</p>
          </div>  
      ) : null}
      {createCard[12] ? (
          <div className="task">
            <p className="task__title">{createCard[12]}</p>
            <p className="task__description">{createCard[13]}</p>
          </div>  
      ) : null}
      {createCard[14] ? (
          <div className="task">
            <p className="task__title">{createCard[14]}</p>
            <p className="task__description">{createCard[15]}</p>
          </div>  
      ) : null}
      {createCard[16] ? (
          <div className="task">
            <p className="task__title">{createCard[16]}</p>
            <p className="task__description">{createCard[17]}</p>
          </div>  
      ) : null}
      {createCard[18] ? (
          <div className="task">
            <p className="task__title">{createCard[18]}</p>
            <p className="task__description">{createCard[19]}</p>
          </div>  
      ) : null}
      {createCard[20] ? (
          <div className="task">
            <p className="task__title">{createCard[20]}</p>
            <p className="task__description">{createCard[21]}</p>
          </div>  
      ) : null}
    </div>
  );
}
