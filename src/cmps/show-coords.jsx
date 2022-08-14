import React, { Component } from 'react'

export class ShowCoords extends Component {
    state = {
        x: null,
        y: null,
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.onMouseMove)
    }


    componentWillUnmount() {
        window.removeEventListener('mousemove', this.onMouseMove)
    }

    onMouseMove = ({ x, y }) => {
        this.setState({ x, y })
    }

    render() {
        return (
            <div className='coords'>{this.state.x},{this.state.y} px</div>
        )
    }
}
