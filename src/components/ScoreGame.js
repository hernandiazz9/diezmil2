import React from 'react'

const ScoreGame = ({total}) => {

    const scoreEnd = 10000-total;

    return ( 
        <span>{scoreEnd}</span>
     );
}
 
export default ScoreGame;