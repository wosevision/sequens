import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromLayer from './layer';
import * as fromRoot from '../../reducers';

export interface LayerState {
  layer: fromLayer.State;
}

export interface State extends fromRoot.State {
  layer: LayerState;
}

export const reducers = {
  layer: fromLayer.reducer
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getLayerState = createFeatureSelector<LayerState>('layer');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getLayerEntitiesState = createSelector(
  getLayerState,
  state => state.layer
);

export const getLayers = createSelector(
  getLayerEntitiesState,
  fromLayer.getLayers
);
export const getSelectedLayerId = createSelector(
  getLayerEntitiesState,
  fromLayer.getSelectedLayerId
);
