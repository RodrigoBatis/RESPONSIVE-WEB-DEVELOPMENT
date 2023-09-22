import logo from "../../assets/logo.png"
import './Header.css'
import { Link } from "react-router-dom"

export default function Header() {

   const titulo = "The Walking Dead"

   return (
     <>
       
         <header>
            <a href="#">
                  <img src={logo} alt={titulo} />
            </a>
            <nav>
               <ul>
                  <li><a href="#"><Link to='/'>Home</Link></a></li>
                  <li><a href="#"><Link to='/historia'>História</Link></a></li>
                  <li><a href="#"><Link to='/episodios'>Episódios</Link></a></li>
                  <li><a href="#"><Link to='/serie'>Série Quadrinhos</Link></a></li>
                  <li><a href="#"><Link to='/contatos'>Contatos</Link></a></li>    
               </ul>
            </nav>
         </header>
 
     </>
   )
 }