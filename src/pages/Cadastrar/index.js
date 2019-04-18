import React, { Component } from "react";
import Formulario from "../../components/Formulario";
import ls from "local-storage";

export default class Cadastrar extends Component {
  handleSubmit = contato => {
    const contatos = ls.get("contatos");

    if (this.verificarEmail(contatos, contato.email)) {
      alert("Email ja cadastrado");
      return false;
    }

    contatos.push(contato);
    ls.set("contatos", contatos);
    return this.props.history.push("/");
  };

  verificarEmail = (contatos, email) => {
    return contatos.filter(target => {
      return target.email === email;
    }).length
      ? true
      : false;
  };

  render() {
    return (
      <div className="container mt-3">
        <header>
          <h3>Cadastrar contato</h3>
        </header>
        <Formulario data={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}
