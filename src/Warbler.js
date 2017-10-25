import React from "react";

const Warbler = () => {
  return (
    <div className="warbler-wrapper">
      <div className="warbler-info">
        <span>tuck fwitter</span>
        <span>@tuck fwitter</span>
        <span>how long ago</span>
      </div>
      <div className="warbler-message">
        <p>message</p>
      </div>
      <div className="warbler-actions">
        <span>reply</span>
        <span>rewaable</span>
        <span>heart</span>
        <span>dm</span>
      </div>
    </div>
  );
};

export default Warbler;
