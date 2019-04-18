import React, { Component } from "react";
import { Link } from "react-router-dom";
import ls from "local-storage";

export default class Fomulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex,
      nome: "",
      email: "",
      telefone: ""
    };
    const contatoEmail = this.props.contatoEmail;

    if (contatoEmail) this.editarForm();
    //return this.cadastrarForm();
  }

  handleChange = event => {
    const input = event.target;
    const value = input.value;

    this.setState(prevState => ({
      ...prevState.contato,
      [input.id]: value
    }));
  };

  editarForm = e => {
    const contatoEmail = this.props.contatoEmail;
    let contatos = ls.get("contatos");
    const contato = contatos.find(target => target.email === contatoEmail);

    this.state = {
      nome: contato.nome,
      email: contato.email,
      telefone: contato.telefone
    };
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.data(this.state);
        }}
      >
        <div className="form-row">
          <div className="form-group col-12 col-md-4">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className="form-control"
              value={this.state.nome}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              required
              disabled={this.props.contatoEmail}
            />
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              className="form-control"
              value={this.state.telefone}
              onChange={this.handleChange}
              required
            />
          </div>
        </div>
        <input type="submit" value="Salvar" className="btn btn-success mr-3" />
        <Link to="/" className="btn btn-light">
          Voltar
        </Link>
      </form>
    );
  }
}
