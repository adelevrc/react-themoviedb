import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0; 
    padding:0;
    box-sizing:border-box; 
    font-family: 'Source Sans Pro', sans-serif;
}

h2{
    font-size:1.5em; 
    font-weight:600;
}
h3{
    font-size:1rem; 
    font-weight:700;
}

h4{
    font-weight:600; 
}
p{
    font-size:0.7rem; 
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

`; 

export default GlobalStyles; 