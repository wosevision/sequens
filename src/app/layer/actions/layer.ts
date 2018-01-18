import { Action } from '@ngrx/store';
import { Layer } from '../models/layer';

export enum LayerActionTypes {
  AddLayer = '[Layer] Add',
  RemoveLayer = '[Layer] Remove',
  SelectLayer = '[Layer] Select'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class AddLayer implements Action {
  readonly type = LayerActionTypes.AddLayer;

  constructor(public payload: { layer: Layer }) { }
}

export class RemoveLayer implements Action {
  readonly type = LayerActionTypes.RemoveLayer;

  constructor(public payload: { id: string }) { }
}

export class SelectLayer implements Action {
  readonly type = LayerActionTypes.SelectLayer;

  constructor(public payload: { id: string }) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type LayerActions = AddLayer | RemoveLayer | SelectLayer;
