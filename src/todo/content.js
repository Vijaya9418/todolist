import React, { Component } from 'react'
import './contentcss.css'

export default class Contentlk extends Component {
    state = {
        name: 'vijaya shree', lname: 'kanwal',
        list: []
    }
    change = () => {
        console.log('clicked');
        var temp = [...this.state.list, document.getElementById('name').value];

        this.setState({ name: document.getElementById('name').value, list: temp });
        localStorage.setItem('list', JSON.stringify(temp))

    }

        componentDidMount = () => {
            if (localStorage.getItem('list') !== null) {
                var temp = JSON.parse(localStorage.getItem('list'));
                this.setState({ list: temp });
            }
    
        }
    

    render() {
        return (
            <div class="row justify-content-center">
                <div class='col-md-6 align-self-center'>
                    <div class="card text-white bg-primary p-5 m-5">
                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                        <div class="card-body">
                            <h4 class="card-title">Todo</h4>
                            <p class="card-text">list</p>
                            <div className="row">
                                <div className="col-8"> <div class="form-group">

                                    <input type="text"
                                        class="form-control" name="" id="name" aria-describedby="helpId" placeholder="Add tasks" />
                                    <small id="helpId" class="form-text text-success">Add tasks</small>
                                </div></div>
                                <div className="col-4"><button onClick={this.change} type="button" name="" id="" class="btn btn-secondary btn-md">Add</button></div>
                                <h1>{this.state.name}</h1>
                                <h1>{this.state.list.map(i => <span className='items'>{i}</span>)}</h1>
                                <i class="fas fa-calculator    "></i>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}