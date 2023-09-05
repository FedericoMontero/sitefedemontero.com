//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import Card from './Components/Card'
import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
//import services from './Components/Services'


//Component About

const About = () => {
  return (
    <div className='about'>
    <Container>
      <Row>
        <Col>
          <h2>Título Sección About</h2> 
          <p>Contenido de about...</p>
          
        </Col>
      </Row>
    </Container>
    </div>
  )
}


//Component Skils

const Skills = () => {
  return (
    <div className='skillsSection'>
    <Container>
      <h2 className="text-center">Mis Skills</h2>
      <Row>
        <Col md={4}>
          <div className="skills">
            <i className="fa fa-truck"></i>
            <h4>Envíos</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, necessitatibus.</p>
          </div>
        </Col>

        <Col md={4}>
          <div className="skills">
            <i className="fa fa-money"></i>
            <h4>Pagos</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, necessitatibus.</p> 
          </div>
        </Col>

        <Col md={4}>
          <div className="skills">
            <i className="fa fa-support"></i>  
            <h4>Soporte 24/7</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, necessitatibus.</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

//export default App


const Home = () => {
  return(
    <div className='home'>
    <Container>
      <Row>
        <Col>
          <h1>Titulo</h1>
          <p>Contenido</p>
        </Col>
      </Row>
    </Container>
    </div>
     
  )
}


//Componente Blog
const Blog = () => {
  
  const articles = [
    {id:1, title:'Titulo 1', content:'Contenido1'},
    {id:2, title:'Titulo 2', content:'Contenido2'},
    {id:3, title:'Titulo 3', content:'Contenido3'},
    {id:4, title:'Titulo 4', content:'Contenido4'}
  ]


  return (
    <div>
      <h1 className='title-blog'>Blog</h1>
      <div className='blog'>
        {articles.map((article)=> (
          //Modificar la etiqueta esta para colocarle un borde al DIV para hacer la card.
          <div key={article.id} className='card'>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <Link to={`/blog/${article.id}`}>Ver Mas</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

//Articulos del blog Falta Css

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
    <div className='article'>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Link to="/blog">Volver al blog</Link>
    </div>
  )
}

//Menu OK
const App = () => {
  return (
    <Router>
      <div className='divMenu'>
        <nav className='navbar'>
          <div className='navbar-content'>

            <div className='navbar-title'>Federico Montero</div>

            <ul className='navbar-menu'>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={
            <Container>
              <Home/>
              <About/>
              <Skills/>
            </Container>
          }/>
          <Route path='/blog' exact Component={Blog}/>
          <Route path='/blog/:id' element={<Article/>}/>
        </Routes>
      </div>
    </Router>

      
  )
}
/*<Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/blog' exact Component={Blog}/>
          <Route path='/blog/:id' element={<Article/>}/>
        </Routes>*/
export default App
