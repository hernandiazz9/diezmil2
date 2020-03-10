import React,{ Fragment} from 'react'
import styled from '@emotion/styled';


const Span = styled.span`
    font-size:30px;
    font-weight:bold;
    margin-right:1rem;
`;
const InputName = styled.input`
    padding: 10px 12px;
    margin-right:1rem;
`


const NamePlayer = ({setGamer, gamer}) => {
    const handleChange = (e) =>{
        setGamer({
            
            [e.target.name]:e.target.value
        })
    }
    return ( 
        <Fragment>
            <Span>Agregar un Jugador</Span>
            <InputName 
                type="text"
                placeholder='Nombre del Jugador'
                name='name'
                value={gamer.name}
                onChange={handleChange}
            />
            
        </Fragment>
     );
}
 
export default NamePlayer;