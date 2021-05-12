import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0; 
    padding:0;
    box-sizing:border-box; 
    font-family: 'Source Sans Pro', sans-serif;
}

h1{
    font-size:2em; 
    } 

h2{
    font-size:1.4em; 
    font-weight:600;
}
h3{
    font-size:1.2rem; 
    font-weight:700;
}

h4{
    font-weight:600; 
}

p{
    font-size:1rem; 
    font-weight:400;
}

button{
    border:none; 
    width: 5rem; 
    height:2rem; 
    border-radius:30px; 
    font-weight:700; 
    background-color:transparent;
    cursor: pointer; 
}

.selected-btn-background{
    background: rgba(3,37,65,1); 
    border-radius:30px; 
    object-fit:cover;
}
.round{
    width:0.5rem; 
    height: 0.5rem; 
    background-color:white; 
    border-radius:50%; 
    margin: 0 0.5em;
}
.white-font{
    color:white; 
}
.selected-button{
    background: rgba(3,37,65,1); 
}
.green-font{
    background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
    background-clip: border-box;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

.block-title-content{
    margin-bottom:1rem;
}

.subtitle{
    display:flex; 
    align-items:center; 
  }
  
.tagline{
    padding:1rem 0 ; 
    font-style: italic;  
    color:#CCC;
}

.vote-average-container{
    margin:10rem; 
}

.vote-average-container svg{
  position: absolute;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  pointer-events: none;
}

}
`;

export default GlobalStyles; 