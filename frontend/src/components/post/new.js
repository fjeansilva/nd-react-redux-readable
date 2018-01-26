import React from 'react';

const ManterPost = () => (
  <div className="container">
    <div className="row">
      <div className="col-8">
      <h2>Criar Post</h2>
      <form>
        <div className="form-group">
          <label for="postTitle">Título</label>
          <input type="text" className="form-control" id="postTitle" />
        </div>
        <div className="form-group">
          <label for="postTitle">Author</label>
          <input type="text" className="form-control" id="postTitle" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Categoria</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label for="postTitle">Descrição</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Publicar post</button>
      </form>
      </div>
    </div>
  </div>
);

export default ManterPost;