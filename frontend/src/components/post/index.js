import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => (
  <div className="row" style={{ margin: "50px 0" }}>
    <div className="col-1 text-center">
      <i className="fa fa-sort-asc" aria-hidden="true" style={{ color: "#fa471e", fontSize: "40px" }}></i>
      <span className="d-block"><b>456</b></span>
      <i className="fa fa-sort-desc" aria-hidden="true" style={{ fontSize: "40px" }}></i>
    </div>
    <div className="col-9" style={{ margin: "auto" }}>
      <Link to="/posts/1/details"><span className="post-title">Nova versão React 5.0</span></Link>
      <span className="post-description">Enviado a 7 horas atrás por <span className="post-author">Jean Silva</span></span>
    </div>
    <div className="col-2 text-center" style={{ margin: "auto" }}>
      <i className="fa fa-comments-o post-icon-comments" aria-hidden="true" style={{ display: "block" }}></i>
      <span className="post-total-comments">11 comentários</span>
    </div>
  </div>
);

export default Post;
