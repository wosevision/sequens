export interface Tween {
  start: number;
  end?: number;
  duration?: number;
  ease?: (t: number) => number;
}

export interface Layer {
  id: string;
  name: string;
  el: string | Element;
  tweens: Tween[];
  selected: boolean;
  visible: boolean;
}

export function getRandomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateMockTween() {
  const start = getRandomBetween(0, 1);
  const end = getRandomBetween(start, 1);
  return {
    start,
    end,
    ease: t => 0.04 * t / (--t) * Math.sin(25 * t)
  };
}

export function generateMockLayer(id, tweens: Tween[] = []): Layer {
  return {
    id,
    name: `mock-layer-${id}`,
    el: '#test-el',
    selected: false,
    visible: true,
    tweens
  };
}

export function generateMockLayers(): Layer[] {
  return [1, 2, 3, 4, 5, 6, 7, 8].map(i => generateMockLayer(i, [generateMockTween()]));
}
