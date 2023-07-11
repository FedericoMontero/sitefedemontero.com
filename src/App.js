import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from './Components/Card'

import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <h1>Bienvenido</h1>
      <h1>Bienvenido</h1>

      <div>
      <div className='containerCard'>
        <Card
          cardTitle="ifhbpriuf"
          cardDescription="uoavpvbpriebvpiarbvrybvaobrorbv"
        />
        <Card
          cardTitle="ifhbpriuf"
          cardDescription="uoavpvbpriebvpiarbvrybvaobrorbv"
        />
        <Card
          cardTitle="ifhbpriuf"
          cardDescription="uoavpvbpriebvpiarbvrybvaobrorbv"
        />
        <Card
          cardTitle="ifhbpriuf"
          cardDescription="uoavpvbpriebvpiarbvrybvaobrorbv"
        />
        <Card
          cardTitle="ifhbpriuf"
          cardDescription="uoavpvbpriebvpiarbvrybvaobrorbv"
        />
        <Card
          cardTitle="ifhbpriuf"
          cardDescription="uoavpvbpriebvpiarbvrybvaobrorbv"
        />
        <Card
          cardTitle="ifhbpriuf"
          cardDescription="uoavpvbpriebvpiarbvrybvaobrorbv"
        />
      </div>
      </div>
    </div>
     
  )
}



const Blog = () => {
  
  const articles = [
    {id:1, title:'Titulo 1', content:'Contenido1'},
    {id:2, title:'Titulo 2', content:'Contenido2'},
    {id:3, title:'Titulo 3', content:'Contenido3'},
    {id:4, title:'Titulo 4', content:'Contenido4'}
  ]


  return (
    <div>
      <h1>Blog</h1>
      <div>
        {articles.map((article)=> (
          //Modificar la etiqueta esta para colocarle un borde al DIV para hacer la card.
          <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <Link to={`/blog/${article.id}`}>Ver Mas</Link>
          </div>
        ))}
      </div>
    </div>
  )
}



const Article = ({ match }) => {

  const { id } = useParams()
  const articleId = parseInt(id)

  const articles = [
    {id:1, title:'Titulo 1', content:'Contenido1'},
    {id:2, title:'Titulo 2', content:'Contenido2'},
    {id:3, title:'Titulo 3', content:'Contenido3'},
    {id:4, title:'Titulo 4', content:'Contenido4'}
  ]

  const article = articles.find((article)=> article.id === articleId)
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Link to="/blog">Volver al blog</Link>
    </div>
  )
}


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/blog' exact Component={Blog}/>
          <Route path='/blog/:id' element={<Article/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
