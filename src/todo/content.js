import React, { Component } from 'react'
import './contentcss.css'
export default class Contentlk extends Component {
    state = {
        name: 'vijay', lname: 'reddy',
        list: [], newlis: []
    }
    change = () => {
        console.log('clicked');
        var i = document.getElementById('name').value;
        if (i !== "") {
            if (this.state.list.indexOf(i) !== -1) {

                alert("can't add a duplicate!");
            }
            else {
                var temp = [...this.state.list, i];
                var templ = [...this.state.newlis, i];
                this.setState({ list: temp, newlis: templ });
                localStorage.setItem('newlist', JSON.stringify(templ))
                localStorage.setItem('list', JSON.stringify(temp))
                console.log(temp, templ)
            }

        }
        else {
            alert('Empty can"t me added!')
        }
        console.log(this.state.newlis)
        document.getElementById('name').value = "";
    }

    componentDidMount = () => {
        if (localStorage.getItem('list') !== null) {

            var temp = JSON.parse(localStorage.getItem('list'));
            var ikb;
            if (localStorage.getItem('newlist') !== null) {
                ikb = JSON.parse(localStorage.getItem('newlist'));
            }
            else {
                ikb = JSON.parse(localStorage.getItem('list'));
            }
            this.setState({ list: temp, newlis: ikb });
        }

    }
    check = (i, e) => {
        var k = this.state.list.indexOf(i);
        var temp = this.state.newlis;
        temp[k] = true;
        this.setState({ newlis: temp });
        localStorage.setItem('newlist', JSON.stringify(temp));
        // console.log(this.state.list, this.state.newlis);

    }
    del = (i, e) => {
        var k = this.state.list.indexOf(i);
        var temp = this.state.list;
        var templ = this.state.newlis;
        temp = temp.filter(x => x !== i);
        templ.splice(k, 1);
        if (k === 0)
            templ.shift();
        else
            templ = templ.filter(x => x !== i && x !== null);

        this.setState({ list: temp, newlis: templ });
        console.log(templ, temp, k, this.state.newlis)
        localStorage.setItem('list', JSON.stringify(temp))
        localStorage.setItem('newlist', JSON.stringify(templ))
    }
    render() {
        return (
            <div class="row justify-content-center ">
                <div class='col-lg-6 align-self-center'>
                    <div class="card text-white  p-5 ">
                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                        <div class="card-body">
                            <h4 class="card-title">Todo</h4>
                            <p class="card-text">list</p>
                            <div className="row">
                                <div className="col-8"> <div class="form-group">

                                    <input type="text"
                                        class="form-control" name="" id="name" aria-describedby="helpId" placeholder="Add tasks" />
                                    <small id="helpId " class="form-text text-white">Add tasks</small>
                                </div></div>
                                <div className="col-4"><button onClick={this.change} type="button" name="" id="" class="btn btn-primary btn-md">Add</button></div>

                                {this.state.list.map(i => <span className='iv'>{
                                    this.state.newlis[this.state.list.indexOf(i)] === true
                                        ? <span className='ivlk'> <span onClick={this.check.bind(this, i)} className='itemsx'>{i}</span> <span onClick={this.del.bind(this, i)} className="crossx">X</span></span>
                                        : <span className='ivlk'><span onClick={this.check.bind(this, i)} className='items'>{i} </span><span onClick={this.del.bind(this, i)} className="crossx">X</span></span>
                                }</span>)}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}