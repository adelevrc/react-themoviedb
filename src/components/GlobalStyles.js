import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0; 
    padding:0;
    box-sizing:border-box; 
    font-family: 'Source Sans Pro', sans-serif;
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

}
button:focus{background-color:red;}
`; 

export default GlobalStyles; 