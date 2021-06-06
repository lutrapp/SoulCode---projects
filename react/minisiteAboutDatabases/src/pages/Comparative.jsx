import commands from '../img/table2-commands.png';
import versus from '../img/mongoVersusSql.png';
import tabela from '../img/tabelaDados.png';
import compare from '../img/sql-nosql.png';

function Comparative(){
    return(
        
<section className="comparative">
    <div>
        <img src={versus} alt="imagem mongo versus sql" />
    </div>
    <div>
        <h2>Diferenças básicas</h2>
        <img src={compare} alt="tabela comparativa de estrutura" />
    </div>
    <div>
        <h2>Diferenças nos comandos</h2>
        <img src={commands} alt="tabela comparativa de comandos" />
    </div>
    <div>
        <h2>Diferenças nos recursos</h2>
        <img src={tabela} alt="tabela comparativa de recursos" />
    </div>
        <div>
        </div>
        </section>
    )
}

export default Comparative;