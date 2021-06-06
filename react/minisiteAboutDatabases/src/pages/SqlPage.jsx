import LogoSql from '../img/sqlLogo.png';

function SqlPage(){
    return(
        
<section className="sqlPage">
            <img src={LogoSql} alt="logomarca sql" />
            <h2>O banco de dados SQL - relacional</h2>
          <div>
              <p>Os benefícios e pontos fortes do MySQL são:
             </p>
              <p>· Maturidade. O MySQL é uma base de dados extremamente estabelecida, o que significa que há uma grande comunidade por trás, testes extensos e muita estabilidade.
             </p>
              <p>· Compatibilidade. O MySQL está disponível para todas as plataformas mais utilizadas, inclusive Linux, Windows, Mac, BSD e Solaris. Ele também tem conectores para linguagens como Node.js, Ruby, C#, C++, Java, Perl, Python e PHP, então não está limitado à linguagem de consulta SQL.
             </p>
              <p>· Custo-benefício. A base de dados é open source e gratuita.
             </p>
              <p>· Replicável. A base de dados MySQL pode ser replicada através de vários nós, significando que a carga de trabalho pode ser reduzida e a escalabilidade e disponibilidade da aplicação podem ser aumentadas.
             </p>
              <p>· Sharding. Apesar do sharding (termo comum das bases de dados não-relacionais que significa divisão de dados entre vários servidores) não poder ser feito na maioria das bases de dados SQL, ele pode ser feito em servidores MySQL. Isso é tanto economicamente viável quanto bom para a empresa.
             </p>

          </div>
        </section>
    )
}

export default SqlPage;