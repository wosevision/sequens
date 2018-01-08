import {
  LayerActionTypes,
  LayerActions,
} from './../actions/layers';
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
        layers: []
      };

    case LayerActionTypes.RemoveLayer:
      return {
        layers: []
      };

    default:
      return state;
  }
}

export const getLayers = (state: State) => state.layers;
