import React from 'react';

export default props => (
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
  <link rel="stylesheet" href="./../css/main.css" />
  <link rel="stylesheet" href="./../css/login.css" />
  <link rel="icon" href="../img/glasswine_icon.png" />
  <title>Login</title>
</head>

<body>

  <div className="container">
    <div className="row">
      <div className="col-lg-12">

        <form className="col-lg-12 form-group" id="formulario">
          <h1 className="center">
            Login
          </h1>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4" id="container1">
              <div className="form-group">Login</div>
              <div className="form-group">
                <input type="text" placeholder="username" style={{textAlign: + 'center'}} />
              </div>
              <div className="form-group">Senha</div>
              <div className="form-group">
                <input type="password" placeholder="************" style={{textAlign: + 'center'}} />
              </div>
              <div className="form-group">
                <button className="btn btn-success">Login</button>
              </div>
              <a href="forgotPassword.html">Esqueci minha senha</a>

            </div>
            <div className="col-lg-2 imagem_centro"></div>
            <div className="col-lg-4 center" id="container2" >
              <form action="">
                <div className="form-group">
                  <label for="">Ou então cadastre-se</label>
                </div>
                <div className="form-group">
                  <button className="btn btn-success" type="submit" ><a href="cadastro.html">Ir para cadastro</a></button>
                </div>
              </form>
            </div>
            <div className="col-lg-1"></div>

          </div>

        </form>

      </div>

    </div>

  </div>

</body>

</html>
)
