import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="myFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <img className="logoStyle" src={require('./img/logo.png')} />
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
                                <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
                            </div>
                            <button type="button" class="btn btn-default">Ladybird school</button>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p>© 2018 Copyright</p>
                </div>
            </footer>
        )
    }
}
