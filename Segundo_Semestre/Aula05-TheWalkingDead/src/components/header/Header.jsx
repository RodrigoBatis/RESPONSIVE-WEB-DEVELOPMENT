import logo from "../../assets/logo.png"

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
                  <li><a href="#">Home</a></li>
                  <li><a href="#">História</a></li>
                  <li><a href="#">Epsódios</a></li>
                  <li><a href="#">Série Quadrinhos</a></li>
                  <li><a href="#">Contatos</a></li>    
               </ul>
            </nav>
         </header>
 
     </>
   )
 }