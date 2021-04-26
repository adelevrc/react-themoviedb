import axios from 'axios'; 
function App() {

  axios.get('https://api.themoviedb.org/3/movie/2/images?api_key=85ab3097ed17406d1f0a73c4321c4bca')
  .then(function (response) {
    console.log(response.data.backdrops);
  })
  .catch(function (error) {
    console.log(error);
  });  

  return (
    <div className="App">
      <h1> Hello World ! </h1>
    </div>
  );
}

export default App;
