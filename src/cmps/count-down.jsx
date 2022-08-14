import React from 'react'

export default class CountDown extends React.Component {
    state = {
        diff: this.props.targetTime - Date.now()
    }

    timerInterval

    componentDidMount() {
        if (this.timerInterval) return
        const { targetTime } = this.props
        this.setState({ diff: targetTime - Date.now() })
        this.timerInterval = setInterval(() => {
            const { targetTime } = this.props
            this.setState({ diff: targetTime - Date.now() })
            if (this.state.diff <= 2000) {
                clearInterval(this.timerInterval)
                this.props.dueFanc()
            }
        }, 1000)
    }

    get minutes() {
        const minutes = new Date(this.state.diff).getMinutes()
        return (minutes + '').padStart(2, '0')
    }

    get seconds() {
        const seconds = new Date(this.state.diff).getSeconds()
        return (seconds + '').padStart(2, '0')
    }

    render() {
        const redClass = this.state.diff <= 11000 ? ' red' : ''
        return (
            <section className='timer-container'>
                <h1 className='timer-header'>TIMER</h1>
                <h1 className='timer-clock'>
                    {this.minutes}:<span className={redClass}>{this.seconds}</span>
                </h1>
            </section>
        )
    }
}
