import React, { Component } from 'react'
import { Navbar } from "reactstrap";
export default class Footer extends Component {
    render() {
        return (
            <Navbar color={'light'} id="myFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <img width="100%" height="70%" src={require('./img/logo.png')} />
                        </div>
                        <div class="col-sm-2">
                            <h5>Ladybird school</h5>
                            <ul>
                                <li><a href="#">Ladybird school</a></li>
                                <li><a href="#">Ladybird school</a></li>
                                <li><a href="#">Ladybird school</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Ladybird school</h5>
                            <ul>
                                <li><a href="#">Ladybird school</a></li>
                                <li><a href="#">Ladybird school</a></li>
                                <li><a href="#">Ladybird school</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Ladybird school</h5>
                            <ul>
                                <li><a href="#">Ladybird school</a></li>
                                <li><a href="#">Ladybird school</a></li>
                                <li><a href="#">Ladybird school</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-3">
                            <div class="social-networks">
                                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        )
    }
}
