const EditItem = ({ handleEdit, newValue }) => {
  return (
    <div>
      <form onSubmit={handleEdit}>
        <label>
          EDIT TASK:
          <input type="text" value={newValue} />
        </label>
        <input className="submitButton" type="submit" />
      </form>
    </div>
  );
};

export default EditItem;
