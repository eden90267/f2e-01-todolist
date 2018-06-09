import React from 'react';

const AddTask = () =>
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">+</span>
    </div>
    <input type="text" className="form-control" placeholder="Add Task"/>
  </div>

export default AddTask;