import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
           <footer className="text-muted mt-5 bg-light">
            <div className="container bg-light" >
                <p className="float-right">
                </p>
                <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
            </div>
        </footer>

        )
    }
}
