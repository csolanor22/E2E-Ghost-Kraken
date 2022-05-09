# E2E-Ghost-Kraken
 
 Integrantes: 
 
 - ANDERSON GIOVANNY CASTIBLANCO PRIETO  (ag.castiblanco1207@uniandes.edu.co)
 - MARLON MAURICIO AGON FLOREZ  (m.agonf@uniandes.edu.co)
 - CESAR ALFONSO SOLANO RUIZ  (c.solanor@uniandes.edu.co)
 - ANA LUCIA FORERO NEME  (a.foreron@uniandes.edu.co)

Repositorio pruebas Kraken.

Funcionalidades y escenarios:
  - Crear usuario Administrador
      - Crear un nuevo usuario administrador de forma exitosa
      - Crear un usuario administrador de forma no exitosa con una clave corta
      - Crear un usuario administrador de forma no exitosa con una clave insegura
      - Crear un usuario administrador de forma no exitosa con un correo inválido
      - Crear un usuario administrador de forma no exitosa sin título del sitio
  - Ingresar a la aplicacion:
      - Login exitoso y Logout
      - Login erroneo por password incorrecto
      - Login erroneo por username inexistente en DB
  - Administración Post
      - Listar Post
      - Crear post sin publicar
      - Crear post y publicar
      - Crear post y publicar 2 minutos después
      - Actualizar un post
      - Crear un post y eliminar el post
      - Crear post, publicar y quitar publicación.


Intrucciones para ejecutar las pruebas creadas con Kraken:
  - Instale kraken en su computador siguiendo las instrucciones que se encuentra en: https://thesoftwaredesignlab.github.io/Kraken/#installation
  - Despliegue la aplicación Ghost de forma local siguiendo este tutorial: https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0
  - Descargue este repositorio ejecutando en su consola el comando `git clone https://github.com/csolanor22/E2E-Ghost-Kraken.git`
  - Desde la console entre a la carpeta creada al clonar el repositorio
  - Dentro de la carpeta raíz del proyecto ejecute el comando npm install
  - Puede usar el comando `npx kraken-node run` ó `kraken-node run` para correr las pruebas
