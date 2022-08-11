import React from 'react'
import summer from '../../public/img/summer.png'
import spring from '../../public/img/spring.png'
import autumn from '../../public/img/autumn.png'
import winter from '../../public/img/winter.png'
export class ShowTime extends React.Component {
    state = {
        localTime:"",
        mood:false,
        seasons: [winter, spring, summer, autumn],
        date: new Date(),

    }

    handleClick = () => {
        this.setState(({ mood }) => ({ mood: !mood }))
    }

    intervalId

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => (prevState.localTime = new Date().toLocaleTimeString()), () => {
            })
        }, 1000)
    }

    currSeason() {
        let season = Math.floor((this.state.date.getMonth() / 12) * 4) % 4
        return this.seasons[season]
    }

    render(){
        const {localTime} = this.state
        var changeMood = '';
        if(this.state.mood){
            changeMood = 'darkMood';
        } 
        else{
            changeMood = 'lightMood';
        }
        return (
        <section className={changeMood} onClick={this.handleClick}>
            <h1>clock: {localTime}</h1>
            {/* <img src={require(`../../public/img/${this.seasonImg}.png`)} /> */}

        </section>
        )
    }
}

export default ShowTime;
