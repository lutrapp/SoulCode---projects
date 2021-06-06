import {Link} from 'react-router-dom';

import LogoMongo from '../img/mongoLogo.png';
import LogoSql from '../img/sqlLogo.png';

function Footer(){
    return(
        <footer>
            <nav>
                <ul>
                    <li id="home"><Link to='/'><i class="fas fa-home"></i></Link> </li>
                    <li><Link to='/newsletter'><i class="far fa-newspaper"></i> Newsletter</Link> </li>
                    <li><Link to='/mongo'><img src={LogoMongo} alt="logomarca MongoDb"/></Link> </li>
                    <li><Link to='/sql'><img src={LogoSql} alt="Logomarca Sql"/></Link> </li>
                    <li><small>Luciane Trapp - 2021</small></li>
                </ul>
                
              
            </nav>
        </footer>
    )
}

export default Footer;