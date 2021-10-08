1. Instalamos ejs
```
npm i ejs
```
2. Requerimos ejs en el entry point
3. Configuramos el template engine
```
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
```
4. Cambiamos los archivos con extensión **html** por **ejs**
5. Cambiamos los sendFile por render