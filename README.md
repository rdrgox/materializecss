<p align="center">
  <a href="http://materializecss.com/">
    <img src="http://materializecss.com/res/materialize.svg" width="150">
  </a>
</p>

<h4 aligN="center">vérsion 1.0.0</h4>

---

#### Estructura de Materialize: 
```console
materialize/
├── css
│   └── materialize.min.css
├── js
│   └── materialize.min.js
├── index.html
```

#### Preparar archivo HTML
```html
<html>
  <head>
    
    <title>Ejemplo con Materialize</title>
    <!--Importar Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Importar materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body>
      
    
      
    <!--Importar archivo de JavaScript agregar al final del body-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
  </body>
</html>
```