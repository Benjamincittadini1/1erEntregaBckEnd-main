import express from 'express';
import { routerProducto, routerCarrito } from './routes/index.js';

export const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next){
    res.status(404);  
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    } })
app.use('/api/productos', routerProducto);
app.use('/api/carrito', routerCarrito);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});
server.on('error', error => console.log(`error running server: ${error}`));