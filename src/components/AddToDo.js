export function AddToDo({ handleAdd }) {
  return (
    <button className="add-btn" onClick={handleAdd}>
      Add todo
    </button>
  );
}
