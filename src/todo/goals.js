import React, { Component } from 'react'
import './goalscss.css'
export default class Contentlkg extends Component {
    state = {
        name: 'vijay', lname: 'reddy',
        listgoals: [], newlisgoals: []
    }
    change = () => {
        console.log('clicked');
        var i = document.getElementById('name').value;
        if (i !== "") {
            if (this.state.listgoals.indexOf(i) !== -1) {

                alert("can't add a duplicate!");
            }
            else {
                var temp = [...this.state.listgoals, i];
                var templ = [...this.state.newlisgoals, i];
                this.setState({ listgoals: temp, newlisgoals: templ });
                localStorage.setItem('newlistgoals', JSON.stringify(templ))
                localStorage.setItem('listgoals', JSON.stringify(temp))
                console.log(temp, templ)
            }

        }
        else {
            alert('Empty can"t me added!')
        }
        console.log(this.state.newlisgoals)
        document.getElementById('name').value = "";
    }

    componentDidMount = () => {
        if (localStorage.getItem('listgoals') !== null) {

            var temp = JSON.parse(localStorage.getItem('listgoals'));
            var ikb;
            if (localStorage.getItem('newlistgoals') !== null) {
                ikb = JSON.parse(localStorage.getItem('newlistgoals'));
            }
            else {
                ikb = JSON.parse(localStorage.getItem('listgoals'));
            }
            this.setState({ listgoals: temp, newlisgoals: ikb });
        }

    }
    check = (i, e) => {
        var k = this.state.listgoals.indexOf(i);
        var temp = this.state.newlisgoals;
        temp[k] = true;
        this.setState({ newlisgoals: temp });
        localStorage.setItem('newlistgoals', JSON.stringify(temp));
        // console.log(this.state.list, this.state.newlis);

    }
    del = (i, e) => {
        var k = this.state.listgoals.indexOf(i);
        var temp = this.state.listgoals;
        var templ = this.state.newlisgoals;
        temp = temp.filter(x => x !== i);
        templ.splice(k, 1);
        if (k === 0)
            templ.shift();
        else
            templ = templ.filter(x => x !== i && x !== null);

        this.setState({ listgoals: temp, newlisgoals: templ });
        console.log(templ, temp, k, this.state.newlisgoals)
        localStorage.setItem('listgoals', JSON.stringify(temp))
        localStorage.setItem('newlistgoals', JSON.stringify(templ))
    }
    render() {
        return (
        
            <div class="row justify-content-center">
                
                <div class='col-lg-6 align-self-center'>
                    <div class="cards text-black  p-5 ">
                    <h3 class="form-text text-center" >GOALS</h3>
                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                        <div class="card-body">
                            <h4 class="card-title ">Todo Goals</h4>
                            <p class="card-text">Add Goals</p>
                            <div className="row">
                                <div className="col-8"> <div class="form-group">

                                    <input type="text"
                                        class="form-control" name="" id="name" aria-describedby="helpId" placeholder="Add tasks" />
                                    <small id="helpId" class="form-text text-black">Add tasks</small>
                                </div></div>
                                <div className="col-4"><button onClick={this.change} type="button" name="" id="" class="btn btn-primary btn-md">Add</button></div>

                                {this.state.listgoals.map(i => <span className='iv'>{
                                    this.state.newlisgoals[this.state.listgoals.indexOf(i)] === true
                                        ? <span className='ivlk'> <span onClick={this.check.bind(this, i)} className='itemsxg'>{i}</span> <span onClick={this.del.bind(this, i)} className="crossxx">X</span></span>
                                        : <span className='ivlk'><span onClick={this.check.bind(this, i)} className='itemsg'>{i} </span><span onClick={this.del.bind(this, i)} className="crossxx">X</span></span>
                                }</span>)}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}