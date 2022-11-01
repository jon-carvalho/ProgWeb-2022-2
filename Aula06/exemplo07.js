function habilitarComentario() {
    let comentario = "Nome: <br> <input type='text' name='name'> <br> Coment: <br> <textarea rows='5'cols='50'></textarea> <br> <input type='submit' value='Comentar'> "

    document.getElementById('comentarios').innerHTML = comentario
}