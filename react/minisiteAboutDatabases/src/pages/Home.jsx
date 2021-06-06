import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import clowd from '../img/clowdWords.jpg';


function Home(){
    return(
    <section id="topo" className="home">
        <div>
            <nav className="navHome">
                <ul>
                    <li><AnchorLink href='#estrutura'>Estrutura</AnchorLink></li>
                    <li><AnchorLink href='#saberEscolher'>Saber Escolher</AnchorLink></li>
                    <li><AnchorLink href='#impacto'>Impacto nos Projetos</AnchorLink></li>
                    <li><AnchorLink href='#newsletter'>Newsletter</AnchorLink></li>
                </ul>
            </nav>
            <div>
                <img src={clowd} alt="nuvem de palavras relacionadas à banco de dados" />
            </div>
        </div>
        <div id="estrutura">
            <h2>Estrutura</h2>
            <p>
            As bases de dados SQL são baseadas em tabelas, enquanto que as bases de dados NoSQL podem ser baseadas em documentos, pares de chave-valor, grafos ou orientados a colunas. Isso torna as bases de dados SQL relacionais opções melhores para aplicações que requerem transações retornando várias colunas — como um sistema de contabilidade — ou para sistemas legados que foram criados em uma estrutura relacional.
            </p>
            <p>
            Alguns exemplos de bases de dados SQL incluem o MySQL, Oracle, PostgreSQL e Microsoft SQL Server. Exemplos de bases de dados NoSQL incluem MongoDB, BigTable, Rediz, RavenDB, Cassandra, HBase, Neo4j e CouchDB.
            </p>
            <li className="ancoraTopo"><AnchorLink href='#topo'>Voltar ao topo</AnchorLink></li>
            <hr />
        </div>
        <div id="saberEscolher">
            <h2>Saber escolher</h2>
            <p>
            MySQL é uma escolha de peso para qualquer negócio que vai se beneficiar de sua estrutura e esquema pré-definidos. Por exemplo, aplicações que requerem transações de várias linhas — como sistemas de contabilidades ou sistemas que monitoram inventário — ou rodam em sistemas legados vão prosperar com a estrutura MySQL.
            </p>
            <p>
            O MongoDB, por outro lado, é uma boa escolha para negócios que têm crescimento rápido ou bases de dados sem definições claras de esquemas. Mais especificamente, se você não conseguir definir um esquema para o seu banco de dados, se perceber que está sempre desnormalizando esquemas de dados ou se o seu esquema passa constantemente por mudanças — como costuma ser o caso de apps mobile, análises em tempo real, sistemas de gerenciamento de conteúdo etc — o MongoDB pode ser a escolha certa para você.
            </p>
            <li className="ancoraTopo"><AnchorLink href='#topo'>Voltar ao topo</AnchorLink></li>
            <hr />
        </div>
        <div id="impacto">
          <h2>Impacto nos Projetos</h2>
          <p>
          Uma das diferenças nos bancos de dados NoSQL é que toda a informação é agrupada e guardada no mesmo registro. Já no SQL você precisa ter o relacionamento entre várias tabelas para ter a informação, informação esta disposta no modelo entidade e relacionamento. Se o seu projeto requer atualização imediata, o modelo relacional seria o mais recomendado, uma vez que os dados são mais sensíveis.
          </p>
          <p>
              No modelo relacional é possível também fazer relação entre as tabelas com chaves estrangeiras, conectando uma série de informações. Vai depender do que o o projeto em questão necessita. 
          </p>
          <p>
          O SQL tem certa dificuldade em conciliar a demanda por escalabilidade. Quanto a escalabilidade do NoSQL, deve se levar em consideração a modelagem do sistema. Do que adianta termos um sistema super simples e querermos utilizar o NoSQL apenas pela escalabilidade? Todo o ganho de performance seria perdido quando rodássemos a aplicação.
        </p>
        <p>Um ponto forte do SQL é quanto à consistência das informações. Já o NoSQL garante o último valor atualizado, isso se nenhuma atualização for realizada até o momento da consulta. Quanto à segurança, ambos estão suscetíveis a ataques.
        </p>
        <li className="ancoraTopo"><AnchorLink href='#topo'>Voltar ao topo</AnchorLink></li>
        <hr />
        </div>
        <div id="newsletter">
            <Link to="/newsletter" className="btnNewsletter">Receba a newsletter!</Link><br/>
            <small>Fonte: treinaweb.com.br e medium.com</small>
        </div>
          
</section>
    )
}

export default Home;
