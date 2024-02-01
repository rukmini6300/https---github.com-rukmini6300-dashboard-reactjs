import { useState } from "react";
import "../App.css";
function Addstory(props: any){
    const {handleChangeCallback, submitData, inputValue } = props ;
    const [errors, setErrors] = useState(inputValue);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...inputValue };

    // Validate title
    if (!inputValue.title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    }

    // Validate points
    if (!inputValue.points.trim()) {
      newErrors.points = "Points are required";
      valid = false;
    }

    // Validate status
    if (inputValue.status === "none") {
      newErrors.status = "Please select a status";
      valid = false;
    }

    // Validate description
    if (!inputValue.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  return (
    <>  
      <div className="story_main">
        <div className="story_title">
          <h2 className="story_cont">Add Story</h2>
          <div className="story_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
             
            </svg>
          </div>
        </div>
        {/* form labels */}
        <form className="form_head">
          <div className="form_control_first">
            <div className="form_control">
              <label>
                Task title <span>*</span>
              </label>
              <input
                type="text"
                name="title"
               value={inputValue.title}
              onChange={handleChangeCallback}
              />
            </div>
            <div className="form_control test">
              <label>
                Points <span>*</span>
              </label>
              <input
                type="text"
                name="points"
                value={inputValue.points}
                onChange={handleChangeCallback}
              />
            </div>
          </div>
          <div className="form_control_secon">
            <div className="form_control_cont">
              <label>
                Status <span>*</span>
              </label>
              <select  onChange={handleChangeCallback} name="status" value={inputValue.status}>
                <option value="none">Select</option>
                <option value="Backlog">Backlog</option>
                <option value="Development">Development</option>
                <option value="Groming">Groming</option>
              </select>
            </div>
            <div className="form_control_cont">
              <label>Prority </label>
              <select onChange={handleChangeCallback} name="priority" value={inputValue.priority}>
                <option value="none">Select</option>
                <option value="🏴">🏴</option>
                <option value="🏳️">🏳️</option>
                <option value="🚩">🚩</option>
              </select>
            </div>
          </div>
          <div className="form_label">
            <label>
              Description <span>*</span>
            </label>
            <input
              type="text"
              name="description"
              value={inputValue.description}
              onChange={handleChangeCallback}
            />
            <span className="error">{errors.description}</span>
          </div>
        </form>
        <div className="floating_btn">
          <button>cancel</button>
          <button 
          onClick={() => {
            if (validateForm()) {
              submitData();
            }
          }}
          >
            save</button>
        </div>
      </div> 
    </>
  );
}

export default Addstory;
