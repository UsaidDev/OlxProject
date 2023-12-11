import React from 'react'
import './Sellproduct.css'
function Sellproduct() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <form>
            <div class="form-group ">
              <label for="">Email address</label>
              <input type="title" class="form-control" id="" className='inputbox' placeholder="Enter Your name" />
            </div>
            <div class="form-group">
              <label for="text">Category</label>
              <input type="text" class="form-control" id="" className='inputbox' placeholder="Category" />
            </div>
            <div class="form-group">
              <label for="text">Price</label>
              <input type="text" class="form-control" id="" className='inputbox' placeholder="Price" />
            </div>
            <div class="form-group">
              <label htmlFor="">Post</label>
              <input type="file" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sellproduct
