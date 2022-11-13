import { COLORS, NodeSettings, NODE_HEIGHT, NODE_WIDTH } from "./constants";

function generateRandom(maxLimit = 100, offset = 0) {
  let rand = Math.random() * maxLimit + offset;
  rand = Math.floor(rand);

  return rand;
}

function generateRandomSettings(): NodeSettings {
  const initialOffsetY = generateRandom(
    window.innerHeight - NODE_WIDTH - 80,
    80
  );
  const initialOffsetX = generateRandom(
    window.innerWidth - NODE_HEIGHT - 24,
    12
  );
  const color = COLORS[generateRandom(COLORS.length)];
  return {
    initialOffsetY,
    initialOffsetX,
    color,
  };
}

export { generateRandomSettings, generateRandom };
