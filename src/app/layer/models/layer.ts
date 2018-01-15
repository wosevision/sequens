export interface Tween {
  start: number;
  end?: number;
  duration?: number;
  ease?: (t: number) => number;
}

export interface Layer {
  id: number;
  name: string;
  el: string | Element;
  tweens: Tween[];
  selected: boolean;
  visible: boolean;
}

export function generateMockLayer(id): Layer {
  return {
    id,
    name: `mock-layer-${id}`,
    el: '#test-el',
    tweens: [],
    selected: false,
    visible: true
  };
}
