import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">TAMAN BUNGA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="http://localhost:3000/beranda">Beranda<span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="http://localhost:3000/tentangsaya">Tentang Saya</a>
      <a class="nav-item nav-link" href="http://localhost:3000/karya">Karya</a>
      <a class="nav-item nav-link" href="http://localhost:3000/kontak">Kontak</a>
    </div>
  </div>
</nav>

<p className="text-center"><Utama />INI BUKAN TAMAN BUNGA</p>
</div>
  //     <div className="navbar navbar-expand-lg navbar-light bg-info">
  //         <button type="button" class="btn btn-outline-danger">TAMAN BUNGA</button>
  // <div className="App container">
  // <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //   <div className="navbar-nav"></div>
  //   <div className="nav navbar-nav navbar-right">
  //       <Link to="#beranda"><button type="button" class="btn btn-outline-success">Beranda</button></Link> &nbsp; 
  //       <Link to="#tentangsaya"><button type="button" class="btn btn-outline-warning">Tentang Saya</button></Link> &nbsp;  
  //       <Link to="#karya"><button type="button" class="btn btn-outline-secondary">Karya</button></Link>  &nbsp; 
  //       <Link to="#kontak"><button type="button" class="btn btn-outline-success">Kontak</button></Link> &nbsp;
  //       </div>  
  //       </div>
  //       </div> 
  //       </div>
        
    );
  }

}

export default App;