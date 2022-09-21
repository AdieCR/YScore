import React, {useState, useEffect} from 'react';
import './ScoreBar.css';

function ScoreBar() {
    const [mainScore, setMainScore] = useState(0);
    const [color, setColor] = useState('');

    const animationStyles = {
        transition: 'all 3s',
        transform: `rotate(${(mainScore * 0.32) - 50}deg)`,
        borderRightColor: color,
        borderBottomColor: color
    };

    const beginningEndBackground = {
        backgroundColor: color
    }

    const handleColor = (number) => {
        if (number > 669) {
            setColor('#40e9bb');
        } else if (number > 579) {
            setColor('yellow');
        } else {
            setColor('red');
        }
    }
    
    useEffect(() => {
        setMainScore(850);
        handleColor(850);
    },[])

  return (
    <div>
        <div class="d-flex justify-content-center align-items-center mt-5">
            <div class="sales-target__progress-bar">
                <div class="left" style={beginningEndBackground}></div>
                <div class="right">
                <div class="back"></div>
                </div>
                <div class="barOverflow">
                <div class="bar" style={animationStyles}>
                    <div class="top-circle" style={beginningEndBackground}></div>
                </div>

                </div>
                <div class="total-count">
                <span>{mainScore}</span>
                <div class="total-count__text">
                    Your Credit Score
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ScoreBar