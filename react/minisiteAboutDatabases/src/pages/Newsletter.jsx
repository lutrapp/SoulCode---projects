
function Newsletter(){
    return(
        
<section className="newsLetter">
        <h2><i class="far fa-newspaper"></i> Newsletter</h2>
           <form action="/">
               <div>
                   <input name="nome" type="text" placeholder="digite seu nome" />
               </div>
               <div>
                   <input name="email" type="email" placeholder="digite seu email" />
               </div>
               <div>
                  <button type="submit">Quero receber</button><br />
                  <small>*1 e-mail por semana</small>
               </div>
           </form>
        </section>
    )
}

export default Newsletter;