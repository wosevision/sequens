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

export function generateMockLayer(): Layer {
  return {
    id: 0,
    name: 'mock-layer-1',
    el: '#test-el',
    tweens: [],
    selected: false,
    visible: true
  };
}
