import { useState } from "react";
import "../App.css";
function Addstory(props: any){
    const {handleChangeCallback, submitData, inputValue } = props ;
    const [titleError, setTitleError] = useState("");
    const [pointsError, setPointsError] = useState("");
    const [Status,setStatus]=useState("");
    const [priority,setPriority]=useState("")
    const [descriptionError, setDescriptionError] = useState("");

  const handleValidation = () => {
    let isValid = true;

    if (inputValue.title.length < 5) {
      setTitleError("Title must be at least 5 characters");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (isNaN(inputValue.points) || inputValue.points >= 8 ) {
      setPointsError("Points should be max value 8");
      isValid = false;
    } else {
      setPointsError("");
    }
    if (inputValue.status.length < 5) {
      setStatus("This field is Mandatory");
      isValid = false;
    } else {
      setStatus("");
    }
    if (inputValue.priority.length == 0) {
      setPriority("This priority field is Mandatory");
      isValid = false;
    } else {
      setPriority("");
    }

    if (inputValue.description.length === 0) {
      setDescriptionError("Description is required");
      isValid = false;
    } else {
      setDescriptionError("");
    }

    return isValid;
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
               {titleError && <p className="error_message">{titleError}</p>}
               
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
                {pointsError && <p className="error_message">{pointsError}</p>}
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
              {Status && <p className="error_message">{Status}</p>}
            </div>
            <div className="form_control_cont">
              <label>Prority </label>
              <select onChange={handleChangeCallback} name="priority" value={inputValue.priority}>
                <option value="none">Select</option>
                <option value="🏴">🏴</option>
                <option value="🏳️">🏳️</option>
                <option value="🚩">🚩</option>
              </select>
              {priority && <p className="error_message">{priority}</p>}
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
            {descriptionError && <p className="error_message">{descriptionError}</p>}
          </div>
        </form>
        <div className="floating_btn">
          <button>cancel</button>
          <button 
          onClick={() => {
            if (handleValidation()) {
              submitData(inputValue);
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
