import LogoMongo from '../img/mongoLogo.png';

function MongoPage(){
    return(
        
<section className="mongoPage">
            <img src={LogoMongo} alt="logomarca mongo" />
            <h2>O banco de dados NoSQL - não-relacional</h2>
          <div>
              <p>Os benefícios e pontos fortes do MongoDB são:</p>
              <p>· Esquema dinâmico. Como mencionado, isso te dá flexibilidade para mudar seu esquema de dados sem modificar nenhum outro dado existente.</p>
              <p>· Escalabilidade. O MongoDB é horizontamente escalável, o que ajuda a reduzir a carga de trabalho e escalar seu negócio com facilidade.</p>
              <p>· Gerenciamento. A base de dados não requer um administrador. Isso facilita o uso do sistema, já que ele pode ser usado tanto pelos desenvolvedores quanto administradores.</p>
              <p>· Velocidade. Tem performance alta para consultas simples.</p>
              <p>· Flexibilidade. Você pode adicionar novas colunas e campos no MongoDB sem afetar as colunas existentes nem a performance da aplicação.</p>
          </div>
        </section>
    )
}

export default MongoPage;