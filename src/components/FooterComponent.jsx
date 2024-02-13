import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer border justify-content-center align-items-center bg-dark">
                    <span className="justify-content-center align-items-center text-light ">All Rights Reserved 2024 @AshwaniSingh</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent