import React, { Component } from 'react'
import './targetcss.css'
export default class Contentlkt extends Component {
    state = {
        name: 'vijay', lname: 'reddy',
        listtarget: [], newlistarget: []
    }
    change = () => {
        console.log('clicked');
        var i = document.getElementById('name').value;
        if (i !== "") {
            if (this.state.listtarget.indexOf(i) !== -1) {

                alert("can't add a duplicate!");
            }
            else {
                var temp = [...this.state.listtarget, i];
                var templ = [...this.state.newlistarget, i];
                this.setState({ listtarget: temp, newlistarget: templ });
                localStorage.setItem('newlistarget', JSON.stringify(templ))
                localStorage.setItem('listtarget', JSON.stringify(temp))
                console.log(temp, templ)
            }

        }
        else {
            alert('Empty can"t me added!')
        }
        console.log(this.state.newlistarget)
        document.getElementById('name').value = "";
    }

    componentDidMount = () => {
        if (localStorage.getItem('listtarget') !== null) {

            var temp = JSON.parse(localStorage.getItem('listtarget'));
            var ikb;
            if (localStorage.getItem('newlistarget') !== null) {
                ikb = JSON.parse(localStorage.getItem('newlistarget'));
            }
            else {
                ikb = JSON.parse(localStorage.getItem('listtarget'));
            }
            this.setState({ listtarget: temp, newlistarget: ikb });
        }

    }
    check = (i, e) => {
        var k = this.state.listtarget.indexOf(i);
        var temp = this.state.newlistarget;
        temp[k] = true;
        this.setState({ newlistarget: temp });
        localStorage.setItem('newlistarget', JSON.stringify(temp));
        // console.log(this.state.list, this.state.newlis);

    }
    del = (i, e) => {
        var k = this.state.listtarget.indexOf(i);
        var temp = this.state.listtarget;
        var templ = this.state.newlistarget;
        temp = temp.filter(x => x !== i);
        templ.splice(k, 1);
        if (k === 0)
            templ.shift();
        else
            templ = templ.filter(x => x !== i && x !== null);

        this.setState({ listtarget: temp, newlistarget: templ });
        console.log(templ, temp, k, this.state.newlistarget)
        localStorage.setItem('listtarget', JSON.stringify(temp))
        localStorage.setItem('newlistarget', JSON.stringify(templ))
    }
    render() {
        return (
        
            <div class="row justify-content-center">
              
                <div class='col-lg-6 align-self-center'>
                    <div class="cardd text-white bg-secondary p-5">
                    <h3 class="form-text text-center" >TARGET</h3>
                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                        <div class="card-body">
                            <h4 class="card-title">Todo</h4>
                            <p class="card-text">Add Target</p>
                            <div className="row">
                                <div className="col-8"> <div class="form-group">

                                    <input type="text"
                                        class="form-control" name="" id="name" aria-describedby="helpId" placeholder="Add tasks" />
                                    <small id="helpId" class="form-text text-white">Add tasks</small>
                                </div></div>
                                <div className="col-4"><button onClick={this.change} type="button" name="" id="" class="btn btn-primary btn-md">Add</button></div>

                                {this.state.listtarget.map(i => <span className='iv'>{
                                    this.state.newlistarget[this.state.listtarget.indexOf(i)] === true
                                        ? <span className='ivlk'> <span onClick={this.check.bind(this, i)} className='itemsxt'>{i}</span> <span onClick={this.del.bind(this, i)} className="crossxt">X</span></span>
                                        : <span className='ivlk'><span onClick={this.check.bind(this, i)} className='itemst'>{i} </span><span onClick={this.del.bind(this, i)} className="crossxt">X</span></span>
                                }</span>)}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}