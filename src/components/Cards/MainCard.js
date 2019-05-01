import React, { Component, Fragment } from 'react';
import SingleCard from './SingleCard';
import  './MainStyle.css'
import {shuffleArray} from '../Helpers';
import Navbar from '../Navbar'

class MainCard extends Component {

    static defaultProps = {
        Images: [{
            "id": "1",
            "image": "http://getwallpapers.com/wallpaper/full/1/6/f/485533.jpg"
          },
          {
            "id": "2",
            "image": "http://getwallpapers.com/wallpaper/full/4/5/4/485558.jpg"
          },
          {
            "id": "3",
            "image": "http://getwallpapers.com/wallpaper/full/9/e/f/485584.jpg"
          },
          {
            "id": "4",
            "image": "http://getwallpapers.com/wallpaper/full/a/0/3/485651.jpg"
          },
          {
            "id": "5",
            "image": "http://getwallpapers.com/wallpaper/full/7/d/3/485685.jpg"
          },
          {
            "id": "6",
            "image": "http://getwallpapers.com/wallpaper/full/a/d/b/485777.jpg"
          },
          {
            "id": "7",
            "image": "http://getwallpapers.com/wallpaper/full/b/1/3/485986.jpg"
          },
          {
            "id": "8",
            "image": "http://getwallpapers.com/wallpaper/full/a/4/0/486025.jpg"
          }, {
            "id": "9",
            "image": "http://getwallpapers.com/wallpaper/full/5/d/f/486056.jpg"
          },
          {
            "id": "10",
            "image": "http://getwallpapers.com/wallpaper/full/d/4/9/486169.jpg"
          },
          {
            "id": "11",
            "image": "http://getwallpapers.com/wallpaper/full/d/1/7/486212.jpg"
          },
          {
            "id": "12",
            "image": "http://getwallpapers.com/wallpaper/full/c/f/3/486351.jpg"
          }
        ]
    };

    state = {
        currentScore: 0,
        topScore: 0,
        result: "",
        clicked: [],
        Images: this.props.Images,
        gameOver: false
    };

    handleClick = (id) => {
        if(!this.state.clicked.includes(id)) {
            this.pointIncrease();
            this.state.clicked.push(id);
            this.setState({
                gameOver: false
            })
        } else {
            this.resetGame();
        }
    };

    pointIncrease = () => {
        let score = this.state.currentScore + 1;
        if(score === this.state.Images.length) {
            this.setState({
                result: 'You win Click Again',
                currentScore: 0,
                clicked: [],
                Images: this.props.Images,
                gameOver: false
            })
        } else if(score > this.state.topScore) {
            this.setState({
                topScore: score,
                currentScore: score,
                result: 'Correct, New High Score'
            })
        } else {
            this.setState({
                currentScore: score,
                result: 'Correct!'
            })
        }
        this.resetIconArray();
    };


    renderCard = () => {
        return this.state.Images.map(icon => {
            return <SingleCard
            id={icon.id}
            image={icon.image}
            clicked={this.handleClick}
            />
        })
    };

    resetIconArray = () => {
        this.setState({
            Images: shuffleArray(this.props.Images)
        })
    };

    resetGame = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            result: 'You Loss!',
            clicked: [],
            Images: this.props.Images,
            gameOver: true
        })
        this.resetIconArray();
    };

  render() {
      const {topScore, currentScore, result} = this.state;
    return (
        <Fragment>
          <Navbar
          top={topScore}
          current={currentScore}
          result={result}
           />
      <div className='custom_style'>
            {this.renderCard()}
      </div>
        </Fragment>
    )
  }
}

export default MainCard
