import logo from "../../images/LogoBn.jpg"
import "./Navbar.css"

export default function Navbar(){
   
    return  (

       <>
       <nav>
        <div className="input-search-space">
        <i class="bi bi-search"></i>
            <input type="text" placeholder="pesquise por um titulo"/>
        </div>

        <img src={logo} alt="logo do Breaking News" />

        <button>Entrar</button>
       </nav>
       </>
    )
}