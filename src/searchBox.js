import React from 'react'
import search from "./images/search.png";

export default function searchBox({searchfield, onchange}) {
    return (
        <div>
            <div className="form-class">
            <a href="/">
              <img src={search} className="search" alt="search" />
            </a>
            <input
              className="input-field"
              type="search"
              name="search"
              placeholder=" Search Campaigns"
              onChange={onchange}
            />
            </div>
        </div>
    )
}
