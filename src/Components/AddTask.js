import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onChangeDay = (e) => {
    setDay(e.target.value);
  };
  const onChangeRem = (e) => {
    setReminder(e.currentTarget.checked);
  };
  const onSubmit = (e) => {
    e.preventDefault(); //if I don't need it to submit into a page
    if (!text) {
      alert("please add a task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={onChangeText}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={onChangeDay}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={onChangeRem}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
