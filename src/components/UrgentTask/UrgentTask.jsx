import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '../Card';
import {
  // Selectors.
  selectCreateCard,
  selectDrawCreateCard,
  selectCardList,
  // Actions.
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
  const drawCreateCard = useSelector(selectDrawCreateCard);
  const cardList = useSelector(selectCardList)

  function handleSubmit() {
    dispatch(valuesUrgentTask(createCard));
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
    </div>
  );
}
