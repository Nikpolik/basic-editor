export const NODE_HEIGHT = 240;
export const NODE_WIDTH = 240;
export const COLORS: string[] = [
  "#FF7B9C",
  "#C5D8D1",
  "#6E7DAB",
  "#5762D5",
  "#E58C8A",
  "#DA4167",
  "#0D1821",
];

export interface NodeSettings {
  initialOffsetY: number;
  initialOffsetX: number;
  color: string;
}
