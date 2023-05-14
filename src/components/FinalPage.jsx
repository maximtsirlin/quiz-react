import React from 'react'
import Card from './Card'

import './FinalPage.css'

const FinalPage = () => {
    return (
        <Card>
            <h1 className="heading">You reached the end of the game, Frontend Zone</h1>

            <h3 className="primary_text">Your final score is:</h3>

            <h3 className="final_score">100</h3>

            <button className="play_again_btn">Play Again</button>
        </Card>
    )

}

export default FinalPage