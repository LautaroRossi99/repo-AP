import React, {useState} from 'react';
import './Section.css'
import { Box, Text } from '@chakra-ui/react';

//uso de hooks, primero importo useState
const Section = () => {
const [contador, setContador] = useState(0)

function incrementar (){
    if(contador<10)
        setContador(contador + 1)
} 


function decrementar (){
    setContador(contador - 1)
} 

return(
        <div>
            
            <Box as='header' bg='tomato' h="500px">
                <p>{contador}</p>
                <button onClick={incrementar} disable={contador==10?"disabled":""} >suma</button>
                <button onClick={decrementar}>restar</button>
                <Box bg={{base:'pink', md:'blue',lg:'green'}}  >Soy una caja </Box> 
            
                <Box as='header' display='flex' justifyContent='center' alignItems="center" bg='white' h="300px" >
                    <Box bg = "black" w='50px' h='50px' >uno</Box>
                    <Box bg = "yellow" w='50px' h='50px' >dos</Box>
                    <Box bg = "green" w='50px' h='50px' >tres</Box>
                </Box>



            </Box>

        </div>
    )
}

export default Section