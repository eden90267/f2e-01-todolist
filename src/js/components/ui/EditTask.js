import React from 'react'
import {connect} from 'react-redux'
import StarO from 'react-icons/lib/fa/star-o'
import Star from 'react-icons/lib/fa/star'
import Pencil from 'react-icons/lib/fa/pencil'
import Calendar from 'react-icons/lib/fa/calendar'
import File from 'react-icons/lib/fa/file'
import Comment from 'react-icons/lib/fa/comment'
import {changeEditable} from "../../actions";

const EditTask = ({onCancel = f => f}) =>
  <ul className="list-group">
    <li className="list-group-item rounded border-0 mb-2 task">
      <ul className="list-unstyled d-flex my-1 task_content">
        <li>
          <input type="checkbox"/>
        </li>
        <li style={{width: '475px'}}>
          <div>
            <input type="text" className="form-control" placeholder="Enter Title"/>
          </div>
          <hr/>
          <ul className="list-unstyled mt-1">
            <li>
              <div className="form-group">
                <Calendar color="#888" className="mr-1" size={14}/>
                <label htmlFor="deadline">Deadline</label>
                <input type="date" className="form-control" id="deadline" placeholder="Enter Deadline" />
              </div>
            </li>
            <li>
              <div className="form-group">
                <File color="#888" className="mr-1" size={14}/>
                <label htmlFor="file">File</label>
                <div className="input-group">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="file"/>
                    <label className="custom-file-label" htmlFor="file">Choose file</label>
                  </div>
                  <div className="input-group-append">
                    <span className="input-group-text">Upload</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="form-group">
                <Comment color="#888" className="mr-1" size={14}/>
                <label htmlFor="comment">Comment</label>
                <textarea className="form-control" id="comment" rows="3"/>
              </div>
            </li>
          </ul>
        </li>
        <li className="ml-auto mr-3">
          <StarO color="#F5A623" size={20}/>
        </li>
        <li>
          <Pencil size={20}/>
        </li>
      </ul>
      <div className="row task_action">
        <div className="col-6">
          <div className="row">
            <button className="btn btn-light btn-block cancel" onClick={onCancel}>X Cancel</button>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <button className="btn btn-primary btn-block save">＋ Save</button>
          </div>
        </div>
      </div>
    </li>
  </ul>

export default connect(
  null,
  dispatch => ({
    onCancel() {
      dispatch(changeEditable())
    }
  })
)(EditTask)