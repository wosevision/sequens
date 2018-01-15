import {
  LayerActionTypes,
  LayerActions,
} from './../actions/layer';
import { Layer } from '../models/layer';

export interface State {
  selectedLayerId?: number;
  layers: Layer[];
}

const initialState: State = {
  selectedLayerId: null,
  layers: []
};

export function reducer(
  state: State = initialState,
  action: LayerActions
): State {
  switch (action.type) {
    case LayerActionTypes.AddLayer:
      return {
        layers: [action.payload, ...state.layers],
        selectedLayerId: action.payload.id
      };

    case LayerActionTypes.RemoveLayer:
      return {
        layers: state.layers.filter(item => item.id !== action.payload.id),
      };

    case LayerActionTypes.SelectLayer:
      return {
        ...state,
        selectedLayerId: action.payload.id
      };

    default:
      return state;
  }
}

export const getLayers = (state: State) => state.layers;
export const getSelectedLayerId = (state: State) => state.selectedLayerId;
