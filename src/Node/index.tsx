import { NodeSettings, NODE_HEIGHT, NODE_WIDTH } from "./constants";
import { generateRandomSettings } from "./helpers";
import { Container } from "./styles";
import { useEffect, useRef } from "react";

interface Props {
  id: string;
  selected: boolean;
  dragging: boolean;
  disableEvents: boolean;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
}

function Node(props: Props): JSX.Element {
  const nodeRef = useRef<HTMLDivElement>(null);
  const {
    current: { initialOffsetY, initialOffsetX, color },
  } = useRef<NodeSettings>(generateRandomSettings());

  const {
    id,
    onDragStart,
    onDragEnd,
    selected,
    dragging, // this could have ben handled inside ref but since we need the information for disabling events it can also be tracked in state
    disableEvents, // if we don't disable events we cant move over other items since they will capture the event instead
  } = props;

  useEffect(() => {
    if (!dragging) return;

    function handleMouseMove(e: MouseEvent) {
      if (!dragging || !nodeRef.current) {
        return;
      }

      // Position is calculated from top left
      // so we must offset it by node width and height
      const offsetHeight = NODE_HEIGHT / 2;
      const offsetWidth = NODE_WIDTH / 2;
      // Get current position of mouse
      const x = e.clientX;
      const y = e.clientY;

      // we must move the item relative to the its initial position since mouse position is absolute.
      // We could avoid this extra work by having a useLayoutEffect on mount that assigns the initial position.
      const translateX = x - offsetWidth - initialOffsetX;
      const translateY = y - offsetHeight - initialOffsetY;

      nodeRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    // we only want to track mouse move and mouse up events if an item is currently beeing
    // dragged.
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", onDragEnd);

    return () => {
      // clean up event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", onDragEnd);
    };
  }, [dragging, onDragEnd]);

  return (
    <Container
      onMouseDown={() => onDragStart(id)}
      selected={selected}
      disableEvents={disableEvents}
      ref={nodeRef}
      initialOffsetY={initialOffsetY}
      initialOffsetX={initialOffsetX}
      color={color}
    />
  );
}

export default Node;
