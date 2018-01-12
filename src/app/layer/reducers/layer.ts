import {
  LayerActionTypes,
  LayerActions,
} from './../actions/layer';
import { Layer } from '../models/layer';

export interface State {
  layers: Layer[];
}

const initialState: State = {
  layers: []
};

export function reducer(
  state: State = initialState,
  action: LayerActions
): State {
  switch (action.type) {
    case LayerActionTypes.AddLayer:
      return {
        layers: [action.payload, ...state.layers]
      };

    case LayerActionTypes.RemoveLayer:
      return {
        layers: state.layers.filter(item => item.id !== action.payload.id)
      };

    default:
      return state;
  }
}

export const getLayers = (state: State) => state.layers;
