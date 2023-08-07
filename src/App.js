import {React,useState,useEffect} from 'react'
import './App.css';
function App() {


  var [Allrestaurants,setRestaurants]=useState([])
  var [itemss,setitemss]=useState([])

  
  const fetchRest=async()=>{
    const result=await fetch('/shop.json')
    result.json().then(data=>{
      setRestaurants(data.shop)
      setitemss(data.shop.items)
      console.log(Allrestaurants)
    })
    

  }
  useEffect(()=>{
    fetchRest()
    console.log(Allrestaurants)
   },[])
  return (
    <div className="App">
      <div className="shope-main">
      <nav class="navbar navbar-expand-md navbar-light bg-light" style={{border:"1px solid #B6B6B3"}}>
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
           
            <li class="nav-item dropdown drpmain " >
                <a class="nav-link dropdown-toggle text-white fs-3"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SHOP BY CATEGORY </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                   
                 {    Allrestaurants.map(data=>(
                  <li style={{width:"22rem",borderBottom:"1px solid #B6B6B3"}} class="dropdown-submenu" ><a class="dropdown-item " href="http://google.com">{data.name}</a>
                        <ul  class="dropdown-menu">
                         
                     
                          <li  style={{width:"22rem",borderBottom:"1px solid #B6B6B3",backgroundColor:'#B6B6B3'}} class="dropdown-submenu">
                          <li  class="dropdown-submenu"><a class="dropdown-item" href="#">{data.a}</a>
            
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>
                <li><a class="dropdown-item" href="#"></a></li>
            </ul>
        </li>
        <li class="dropdown-submenu"><a class="dropdown-item " href="#">{data.b}</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>

            </ul>
        </li>
        <li class="dropdown-submenu"><a class="dropdown-item " href="#">{data.c}</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>

            </ul>
        </li>
        <li class="dropdown-submenu"><a class="dropdown-item " href="#">{data.d}</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>

            </ul>
        </li>
        <li class="dropdown-submenu"><a class="dropdown-item " href="#">{data.e}</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>

            </ul>
        </li>
        <li class="dropdown-submenu"><a class="dropdown-item " href="#">{data.f}</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>

            </ul>
        </li>
        <li class="dropdown-submenu"><a class="dropdown-item " href="#">{data.g}</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"></a></li>

            </ul>
        </li>
         <a class="dropdown-item dropdown-toggle" href="#"></a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                    <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                </ul>
                            </li>
                    
                         
                        </ul>
                    </li>))}
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-3" href="#"><i style={{color:"red"}} class="fa-solid fa-tag"></i>OFFERS</a>
            </li>
           
        </ul>
    </div>
</nav>
         </div>
    
    </div>
  );
}

export default App;
