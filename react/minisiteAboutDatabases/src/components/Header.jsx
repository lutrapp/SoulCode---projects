import {Link} from 'react-router-dom';


function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li id="home"><Link to='/'><i class="fas fa-home"></i></Link> </li>
                    <li><Link to='/mongo'><i class="fas fa-database"></i> MongoDB</Link> </li>
                    <li><Link to='/sql'><i class="fas fa-database"></i> SQL</Link> </li>
                    <li><Link to='/comparative'><i class="fas fa-search"></i> Comparativo</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;