import React, { Component } from "react";
import { Link } from "react-router-dom";
import ls from "local-storage";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex
    };
    if (!ls.get("contatos")) ls.set("contatos", []);
  }

  remover = contato => {
    let contatos = ls.get("contatos");
    contatos = contatos.filter(target => {
      console.log(contato.email);
      return target.email !== contato;
    });
    ls.set("contatos", contatos);
    this.setState(this.state);
  };

  editar = contato => {
    this.props.history.push(`/editar/${contato}`);
  };

  render() {
    const contatos = ls.get("contatos");
    return (
      <div className="container mt-3">
        <header>
          <h3>Lista de contatos</h3>
        </header>
        <Link to="/cadastrar" className="btn btn-primary pull-right mt-3 mb-3">
          <i className="fa fa-plus" /> Cadastrar
        </Link>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th width="200" className="text-center">
                Telefone
              </th>
              <th width="100" />
            </tr>
          </thead>
          <tbody>
            {contatos.length >= 1 &&
              contatos.map(contato => (
                <tr key={contato.email}>
                  <td>{contato.nome}</td>
                  <td className="text-center">{contato.telefone}</td>
                  <td className="text-center">
                    <button
                      onClick={e => this.editar(contato.email, e)}
                      className="btn btn-info btn-sm mr-1"
                    >
                      <i className="fa fa-pencil" />
                    </button>
                    <button
                      onClick={e => this.remover(contato.email, e)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}

            {contatos.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">
                  <strong>
                    Sem contato cadastrador{" "}
                    <Link to="/cadastrar">Cadastrar</Link>
                  </strong>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
