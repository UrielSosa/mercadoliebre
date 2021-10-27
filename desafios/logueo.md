## Registrar y loguear un usuario
_La opción de loguear un usuario conyeba varios pasos por lo que la información va a viajar por todos los archivos_
1. Debemos instalar **express-session**
```
npm i express-session
```
2. Requerimos en el app.js para configurar express
```
const session = require('express-session');
```
3. Configuramos la sessión a nuestro gusto
```
app.use(session({
    secret: 'hello world',
    saveUninitialized: false,
    resave: false
}))
```
- _El secret normalmente es un parametro unico que se va modificando para que no capturen nuestra session_
- _El saveUninitialized es un parametro para que la sessión se guarde a pesar de no estar inicializada, conviene dejarla en false para que no ocupe espacio en la memoria de sessiones y sirve para casos de inicio de session_
- _El resave guarda sessiones que no fueron modificadas para mantenerlas vivas ya que estas sessiones cuentan con un tiempo de expiración_
4. Tenemos que usar también **cookie-parser** para poder implementar cookies en el sitio
```
npm i cookie-parser
```
5. Debemos implementarlo en el app.js como normalmente usamos middlewares
```
const cookieParser = require('cookieParser');

app.use(cookieParser());
```
6. 