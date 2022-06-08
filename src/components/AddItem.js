// ({THE stuff in here is how the mother App.js comunicates with this file})
const AddItem = ({ handleSubmit, itemInput, setItemInput }) => {
  return (
    <div>
      {/* form - the are preset as forms */}
      {/* form has an event handler submitting new data */}
      <form onSubmit={handleSubmit}>
        {/* just a label */}
        <label>
          ENTER TASK:
          {/* what the user inputs */}
          <input
            // its string
            type="text"
            //  its the vlaue of the input
            value={itemInput}
            // when changed event do this set the input value to the value
            onChange={(e) => {
              // e is event varibale - tatget is where MOTHER APP.js knows where
              // value is the value
              setItemInput(e.target.value);
            }}
          />
        </label>
        {/* input submit button */}
        <input className="submitButton" type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
