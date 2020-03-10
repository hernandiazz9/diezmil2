import React, { useState } from 'react'
import styled from '@emotion/styled';
import ScoreGame from "./ScoreGame";

const Container = styled.div`
background-color: #883d5975;
    max-width:175px;
    border-style: solid;
    margin-left:2rem;
    padding:.5rem;
    border-radius:10px;
    box-shadow: 10px 10px 5px grey;
    
`;

const Name = styled.h1`
    text-align: center;
    text-transform: uppercase;
    color:red;
    margin:2px 2px;
    text-shadow:2px 2px 5px black;
`;
const Score = styled.div`
    text-align:center;
    margin-top:12px ;
    
    input{
        font-size: 20px;
        text-align: -webkit-center;
        padding: 15px 8px;
        width:40%;
        border-radius:6px;
        box-shadow: 2px 2px 3px grey;
        transition: background-color .8s ease; 
        
        :hover{
            
            background-color: #883d5975;
        }
    }
`;

const Button = styled.div`
   text-align:center;
   margin-top:10px ;
   input{
       padding:10px;
       border-radius:6px;
       box-shadow: 2px 2px 3px grey;
       transition: background-color .8s ease; 
        
        :hover{
            cursor:pointer;
            background-color: #883d5975;
        }
   }
   
`;
const Total = styled.div`
    text-align:center;
    margin-top:20px;
    font-size:30px;
    font-weight:bold;
    text-shadow: 0 0 3px #FF0000;
    
`;
const Rest = styled.div`
    text-align:right;
    margin-right:10px;
`;


const Gamer = ({gamer}) => {

    //state
    const [score, saveScore] = useState('');
    const [total, saveTotal] = useState(0);

    const{name}=gamer;
    
    const handleChange = (e) =>{
        saveScore(
        [e.target.name]= e.target.value
        )
    }

    const click = () =>{
        if(score ===''){return null;}

        const scoreTotal = total + parseInt(score);
        saveTotal(scoreTotal);
        saveScore('');
    }


    return ( 
        <Container>
            <Name>{name}</Name>
            
            <Score>
                <input 
                    type="number"
                    placeholder='0'
                    onChange={handleChange}
                    value={score}        
                />
            
            </Score>

            <Button>
                <input 
                    type="button"
                    value='sumar'
                    onClick={click}
            />
            </Button>

            <Total>
                <span>{total}</span>
            </Total>

            <Rest>
                <ScoreGame
                    total={total}
                />
            </Rest>

        </Container>
     );
}
 
export default Gamer;