import { Link } from 'react-router-dom'

//functional component

// import React from 'react'

// export default function nav() {
//     return (
//         <div>
            
//         </div>
//     )
// }




//class component


// import React, { Component } from 'react'

// export default class nav extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'

export default class nav extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
              <Link class="navbar-brand" to="#">Navbar</Link>
              <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavId">
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li class="nav-item active">
                          <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                      </li>
                      
                      <li class="nav-item">
                          <Link class="nav-link" to="target">Target</Link>
                      </li>
                      <li class="nav-item">
                          <Link class="nav-link" to="goals">Goals</Link>
                      </li>
                     
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </div>
          </nav>
        )
    }
}

