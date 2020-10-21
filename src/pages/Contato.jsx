import React from 'react';

export default props => (
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="./../css/main.css" />
    <link rel="stylesheet" href="./../css/contato.css" />
    <title>Contato</title>
</head>

<body>

    <div className="container">
        <div className="row">
            <div className="col-lg-12">

                <form className="col-lg-8" id="central">
                  <br/>
                  <br/>
                    <h1><center>
                        Central de Atendimento
                        </center>
                    </h1> 
                    <h3> <center>
                        Fale conosco!
                        </center>
                    </h3> 
                    

                    <div className="row" > 
                        <div className="col-lg 6 " id="container">
                            <div className="row">
                                <div className="col-12">
                                    <br/>
                                        <label for="exampleInputPassword1">Nome Completo</label>
                                        <input type="text" className="form-control" placeholder="Digite seu nome" />
                                </div>
                                <div className="col-12">
                                    <label for="exampleInputPassword1">CPF/CNPJ</label>
                                    <input type="text" className="form-control valida-cpf-cnpj"  placeholder="000-000-000-00 / XX.XXX.XXX/XXXX-XX" />
                                </div>
                                <div className="col-12">
                                    <label for="exampleInputPassword1">Assunto</label>
                                    <input type="text" className="form-control" placeholder="Digite seu nome" />
                                </div>

                                <div className="col-12 form-group">
                                  <label for="exampleFormControlTextarea1">Descrição</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="col-12">
                                  <p> Iremos retornar sua resposta para o seu e-mail.</p>
                                  <div className="col-8">
                                  <label for="inputAddress"></label>
                                  <button type="submit" className="btn btn-primary btn-lg btn-block" id="teste-botao"onclick="validar()" >Enviar</button>
                                  <br/>
                              </div>

                            </div>

                        </div>

                    </div> 
</div>
                </form>

            </div>

        </div>

        </div>


    


</body>

</html>
)