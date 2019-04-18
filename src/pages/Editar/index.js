import React, { Component } from "react";
import Formulario from "../../components/Formulario";
import ls from "local-storage";

export default class Editar extends Component {
  handleSubmit = contato => {
    let contatos = ls.get("contatos");
    contatos = contatos.map(target => {
      if (target.email === contato.email) return contato;

      return target;
    });

    ls.set("contatos", contatos);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container mt-3">
        <header>
          <h3>Editar contato</h3>
        </header>
        <Formulario
          data={this.handleSubmit.bind(this)}
          contatoEmail={this.props.match.params.contatoEmail}
        />
      </div>
    );
  }
}
