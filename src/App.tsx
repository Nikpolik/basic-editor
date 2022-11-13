import Node from "./Node";
import { Input, Button, ButtonGroup, AppContainer } from "./styles";
import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

function App(): JSX.Element {
  const [nodes, setNodes] = useState<string[]>([]);
  const [{ selectedNode, draggedNode }, setDragState] = useState({
    selectedNode: "",
    draggedNode: "",
  });
  const [amount, setAmount] = useState(1);

  function handleCreate() {
    const newNodes: string[] = [];
    for (let i = 0; i < amount; i++) {
      newNodes.push(uuid());
    }
    setNodes((prev) => [...prev, ...newNodes]);
  }

  function handleRemove() {
    setNodes((prev) => prev.filter((nodeId) => nodeId !== selectedNode));
  }

  // since we pass this as props we must use useCallback to avoid rerenders
  const handleDragStart = useCallback((id: string) => {
    setDragState({ selectedNode: id, draggedNode: id });
  }, []);

  // since we pass this function as props we must use useCallback to avoid rerenders
  const handleDragEnd = useCallback(() => {
    setDragState((prev) => ({
      selectedNode: prev.draggedNode,
      draggedNode: "",
    }));
  }, []);

  return (
    <AppContainer id="app-container">
      <ButtonGroup>
        <Input
          value={amount}
          onChange={(e) => setAmount(Number(e.currentTarget.value))}
        />
        <Button onClick={handleCreate}>Add Node</Button>
        <Button onClick={handleRemove}>Remove Node</Button>
      </ButtonGroup>
      {nodes.map((id) => (
        <Node
          key={id}
          id={id}
          selected={selectedNode === id}
          disableEvents={draggedNode !== id && draggedNode !== ""}
          dragging={draggedNode === id}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      ))}
    </AppContainer>
  );
}

export default App;
