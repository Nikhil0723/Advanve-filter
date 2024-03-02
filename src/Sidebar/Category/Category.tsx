import React from 'react'
import "./Category.css"

export default function Category() {
  return (
    <div>
      <h2 className='sidebar-title'> Category</h2>
      <div>
        <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className="cheakmark"></span>All
        </label>
        <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className="cheakmark"></span>Sneakers
        </label>
        <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className="cheakmark"></span>Flats
        </label>
        <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className="cheakmark"></span>Sandals
        </label>
        <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className="cheakmark"></span>Heals
        </label>
      </div>
    </div>
  )
}
