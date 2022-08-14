import React, { Component } from 'react'

export default class ShowTime extends Component {

    state = {
        date: new Date(),
        isDark: false,
    }

    intervalId

    componentDidMount() {
        if (this.intervalId) return
        this.intervalId = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
        console.log('this.intervalId:', this.intervalId)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    onToggleDarkMode = () => {
        this.setState(prevState => ({ isDark: !prevState.isDark }))
    }

    get season() {
        const seasons = ['winter', 'spring', 'summer', 'autumn']
        const currMonth = Math.floor((this.state.date.getMonth() / 12) * 4)
        return seasons[currMonth]
    }

    get formattedTime() {
        return this.state.date.toLocaleTimeString()
    }

    render() {
        const seasonUrl = require(`../img/${this.season}.png`)
        const darkClass = this.state.isDark ? 'dark' : ''
        return (
            <section className={`wheather-container ${darkClass}`}>
                <img src={seasonUrl} alt='season' />
                <span>{this.formattedTime}</span>
                <button onClick={this.onToggleDarkMode}>Click me</button>
            </section>
        )
    }
}

