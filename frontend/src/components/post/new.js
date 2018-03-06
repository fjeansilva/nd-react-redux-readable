import React from 'react';
import { Link } from 'react-router-dom';

const comments = () => {
  let c = [];
  for (let index = 0; index < 5; index++) {
    c.push(
      <div className="row" style={{ margin: "10px 0" }}>
        <div className="col-1 text-right">
          <i className="fa fa-sort-asc" aria-hidden="true" style={{ color: "#fa471e", fontSize: "20px" }}></i>
            <span className="d-block"><b>4</b></span>
          <i className="fa fa-sort-desc" aria-hidden="true" style={{ fontSize: "20px" }}></i>
        </div>
        <div className="col-8">
          <small className="text-muted"><b>Jean Silva 4 votos</b>&nbsp;6 horas atrás - <a href="#">editar</a>&nbsp;<a href="#">excluir</a></small>
          <p><em>This line rendered as italicized text This line rendered as italicized text This line rendered as italicized text.</em></p>
          <small className="text-muted"></small>
        </div>
      </div>
    );
  }

  return c;
}

const PostDetails = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-1">
          <i className="fa fa-sort-asc" aria-hidden="true" style={{ color: "#fa471e", fontSize: "40px" }}></i>
            <span className="d-block"><b>456</b></span>
          <i className="fa fa-sort-desc" aria-hidden="true" style={{ fontSize: "40px" }}></i>
        </div>
        <div className="col-8">
          <h1 className="display-4">Título do Post</h1>
          <small className="text-muted"><Link to={`/posts/category/react`}>React</Link> - enviado a 8 horas por <i>Jean Silva</i>.</small>
          <p className="lead">
            Quando foram contratadas para serem hostess (recepcionistas de festas) num prestigioso evento de caridade britânica, 
            as jovens não imaginavam que estariam no centro de um escândalo sexual, que tirou do cargo um funcionário do Departamento 
            de Educação do governo e foi comentado até pela primeira-ministra Theresa May.
          </p>
          <small className="text-muted">280 comentários</small>
          &nbsp;
          <Link to="/posts/1/edit">editar</Link>
          &nbsp;
          <Link to="/posts/1/delete">excluir</Link>
        </div>
      </div>
    </div>
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-8 offset-1">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-1">
        <h5>Deixe seu comentário</h5>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Nome" />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" placeholder="Comentário"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>
      </div>
    </div>
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-8 offset-1">
          <hr />
        </div>
      </div>
    </div>
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-8 offset-1">
          <h5>280 comentários</h5>
        </div>
      </div>
    </div>
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-8 offset-1">
          <hr />
        </div>
      </div>
      {comments()}
    </div>
  </div>
);

export default PostDetails;
