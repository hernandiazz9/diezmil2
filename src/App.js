import React,{Fragment, useState} from 'react';
import Gamer from './components/Gamer';
import styled from '@emotion/styled';
import NamePlayer from './components/NamePlayer';
import uuid from 'uuid/v4';


const ContainerHeader = styled.div`
    display:grid;
    flex-direction: column;
    justify-content: right;

    header{
        border:2px solid black;
        font-family: 'Racing Sans One', cursive;
        font-size:100px;
        padding-left: 103px;
        padding-right:75px;
        background-color: burlywood;
        box-shadow: -13px 13px 0px grey;
        text-shadow: 2px 2px 1px red;

    }
`;

const AddPlayer = styled.div`
        background-color: #deb887d9;
        input{
            padding:10px 12px;
        }
`;

const AllContainer = styled.div`
    display: flex;
    margin-top: 2rem;
`;




function App() {
     //state
     const [gamer, setGamer] = useState({
         name:'',
         id:''
     });

     const [gamers, setGamers] = useState([]);

    const handleSubmit =(e) =>{
        e.preventDefault();

        gamer.id=uuid();

        const allGamers = gamer =>{
            setGamers([
                ...gamers,
                gamer
            ])
        }
        allGamers(gamer);
        gamer.id=uuid();
        
        //resetear
        setGamer({
            name:'',
            id:''
        })
    }
    
  return (
    <Fragment>
        <ContainerHeader>
            <header>
                10MIL
            </header>
        </ContainerHeader>

        <AddPlayer>
        <NamePlayer 
            gamer={gamer}
            setGamer={setGamer}
        />
        <input 
            type="button"
            value="Agregar"
            onClick ={handleSubmit}
        />
        </AddPlayer>

        <AllContainer>
            {gamers.map(gamer=>(
                <Gamer 
                    gamer={gamer}
                    key={gamer.id}

                />
            ))}
        </AllContainer>
    
    </Fragment>
  );
}

export default App;
