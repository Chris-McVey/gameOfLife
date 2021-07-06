import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import gridReducer from './gridEvolution/gridEvolutionSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    grid: gridReducer,
  }
});
