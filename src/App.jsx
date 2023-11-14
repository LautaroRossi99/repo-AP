import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/Card/Card'
import Section from './Components/Card/Section/Section'
import {ChakraProvider} from '@chakra-ui/react'

function App() {

const productos = [
{
  "id":"MLA819328068",
  "title":"Motorola G6 Plus de 64 GB Indigo Oscuro 4 Gb Ram",
  "price": 28599,
  "condition":"new",
  "free_shipping":true,
  "thumbnail":"https://d2r9epyceweg5n.cloudfront.net/stores/001/150/952/products/g611-366b9dcf170836d07216115778551499-1024-1024.jpg"
},
{
  "id":"MLA819328068",
  "title":"Motorola G6 Plus de 64 GB Indigo Oscuro 4 Gb Ram",
  "price": 28599,
  "condition":"new",
  "free_shipping":true,
  "thumbnail":"https://d2r9epyceweg5n.cloudfront.net/stores/001/150/952/products/g611-366b9dcf170836d07216115778551499-1024-1024.jpg"
},
{
  "id":"MLA819328068",
  "title":"Motorola G6 Plus de 64 GB Indigo Oscuro 4 Gb Ram",
  "price": 28599,
  "condition":"new",
  "free_shipping":true,
  "thumbnail":"https://d2r9epyceweg5n.cloudfront.net/stores/001/150/952/products/g611-366b9dcf170836d07216115778551499-1024-1024.jpg"
},

{
  "id":"MLA819328068",
  "title":"Motorola G6 Plus de 64 GB Indigo Oscuro 4 Gb Ram",
  "price": 28599,
  "condition":"new",
  "free_shipping":true,
  "thumbnail":"https://d2r9epyceweg5n.cloudfront.net/stores/001/150/952/products/g611-366b9dcf170836d07216115778551499-1024-1024.jpg"
},

{
  "id":"MLA819328068",
  "title":"Motorola G6 Plus de 64 GB Indigo Oscuro 4 Gb Ram",
  "price": 28599,
  "condition":"new",
  "free_shipping":true,
  "thumbnail":"https://d2r9epyceweg5n.cloudfront.net/stores/001/150/952/products/g611-366b9dcf170836d07216115778551499-1024-1024.jpg"
}
]

  return (
    <>
      <div>
        <ChakraProvider>
            <Section/>
        </ChakraProvider>
          {/* <Card producto = {producto} /> */}
          {/* {productos.map(producto=> <Card key={producto.id} img={producto.thumbnail} title={producto.title} price={producto.price} shipping={producto.free_shipping} condition={producto.condition}/>)} */}
          
      </div>
    </>
  )
}

export default App
