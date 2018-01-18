import {
  EntityState,
  EntityAdapter,
  createEntityAdapter
} from '@ngrx/entity';
import {
  LayerActionTypes,
  LayerActions,
} from './../actions/layer';
import { Layer } from '../models/layer';

export interface State extends EntityState<Layer> {
  selectedLayerId?: string | null;
}

export const adapter = createEntityAdapter<Layer>();

export const initialState: State = adapter.getInitialState({
  selectedLayerId: null
});

export function reducer(
  state: State = initialState,
  action: LayerActions
): State {
  switch (action.type) {
    case LayerActionTypes.AddLayer:
      return adapter.addOne(action.payload.layer, state);
    case LayerActionTypes.RemoveLayer:
      return adapter.removeOne(action.payload.id, state);
    case LayerActionTypes.SelectLayer:
      return { ...state, selectedLayerId: action.payload.id };
    default:
      return state;
  }
}

export const getSelectedLayerId = (state: State) => state.selectedLayerId;
