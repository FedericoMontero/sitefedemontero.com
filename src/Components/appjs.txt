//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import Card from './Components/Card'
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
//import services from './Components/Services'


//Component About

const About = () => {
  return (
    <div className="portfolioSection">
      <div className="about-me">
        <p>
          Hello! I'm a passionate software developer based in Montevideo, Uruguay. My journey in the world of programming has led me to explore various facets of development, and I enjoy every step of it.
        </p>
        <p>
          My experience in web development has led me to specialize in Frontend using technologies like React, allowing me to create modern and interactive user interfaces. But I don't stop there; I also have a strong background in backend development using Python and Node.js to build robust and scalable applications.
        </p>
        <p>
          Mobile development is another one of my passions, and I bring it to life with React Native, enabling me to create high-quality mobile applications that work across multiple platforms.
        </p>
        <p>
          What truly excites me is the world of machine learning and artificial intelligence. I've worked with tools like PyTorch, YOLOv5, and FastAPI to implement AI models and solve a variety of exciting problems.
        </p>
        <p>
          Currently, I'm committed to my ongoing growth and pursuing a degree in Systems Engineering to continue challenging myself and exploring new possibilities in the tech world.
        </p>
        <p>
          I'm excited about what the future holds and the opportunities that will arise. I look forward to contributing to and learning from fellow tech enthusiasts like myself!
        </p>
      </div>
      <div className="image-container">
        <img src="/about.svg" alt="Descripción de la imagen" />
      </div>
    </div>
  );
}




//Component Skils

const Skills = () => {
  return (
    <div className='skillsSection'>
    <Container>
      <h2 className="text-center">Skills</h2>
      <Row>
        <Col md={4}>
          <div className="skills">
            <i className="fa fa-truck"></i>
            <h4>Frontend</h4>
            <p>Development of web and mobile applications. I publish applications on Google Play.</p>
          </div>
        </Col>

        <Col md={4}>
          <div className="skills">
            <i className="fa fa-money"></i>
            <h4>Backend</h4>
            <p>API development for Python and NodeJs. I use Fast API to integrate models.</p> 
          </div>
        </Col>

        <Col md={4}>
          <div className="skills">
            <i className="fa fa-support"></i>  
            <h4>Data Science</h4>
            <p>I use Python to create ML models and analyze data.</p>
          </div>
        </Col>
        
      </Row>
      
    </Container>
    
    </div>

    
  )
}

//export default App


const Home = () => {
  /*const [text, setText]=useState('Frontend')
  const phrases = ['Frontend Developer', 'Backend Developer', 'Data Science', 'Mobile Developer']
  const [index, setIndex]=useState(0)

  useEffect(() =>{
    const intervalId=setInterval(()=>{
      setIndex((prevIndex) =>(prevIndex +1)% phrases.length)

    }, 4000)

    return () =>{
      clearInterval(intervalId)
    }
  },[])

  useEffect(()=>{
    setText(phrases[index])
  }, [index])*/
  return(
    <div className='home'>
    <Container>
      <Row>
        <Col>
          <span>Hi, I'm Federico Montero</span>
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

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {/* Tarjeta 1 */}
        <div className="project-card">
          <img src="/1.png" alt="Proyecto 1" />
          {/* Agrega el contenido adicional según tus necesidades */}
        </div>
        {/* Tarjeta 2 */}
        <div className="project-card">
          <img src="/2.png" alt="Proyecto 2" />
          {/* Agrega el contenido adicional según tus necesidades */}
        </div>
        {/* Tarjeta 3 */}
        <div className="project-card">
          <img src="/3.png" alt="Proyecto 3" />
          {/* Agrega el contenido adicional según tus necesidades */}
        </div>
      </div>
    </div>
  );
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
              <Projects/>
            </Container>
          }/>
          <Route path='/blog' exact Component={Blog}/>
          <Route path='/blog/:id' element={<Article/>}/>
        </Routes>

        <Footer/>
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
