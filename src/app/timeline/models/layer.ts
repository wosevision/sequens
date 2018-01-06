export interface Tween {
  start: number;
  end?: number;
  duration?: number;
  ease?: (t: number) => number;
}

export interface Layer {
  id: string;
  index: number;
  el: string | Element;
  tweens: Tween[];
}

export function generateMockLayer(): Layer {
  return {
    id: 'mock-layer-1',
    index: 0,
    el: '#test-el',
    tweens: []
  };
}
