# E2E-Ghost-Kraken
 
 Integrantes: 
 
 - ANDERSON GIOVANNY CASTIBLANCO PRIETO  (ag.castiblanco1207@uniandes.edu.co)
 - MARLON MAURICIO AGON FLOREZ  (m.agonf@uniandes.edu.co)
 - CESAR ALFONSO SOLANO RUIZ  (c.solanor@uniandes.edu.co)
 - ANA LUCIA FORERO NEME  (a.foreron@uniandes.edu.co)

Kraken
------

Funcionalidades y escenarios:
  - Crear usuario Administrador (para ejecutar de forma exitosa las pruebas relacionadas a esta funcionalidad se debe tener una instalación "limpia" de Ghost, es decir sin ningún usuario administrador creado previamente)
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

Cypress
-------

**Funcionalidades y escenarios** 
  - Ingresar a la aplicacion:
      - Login exitoso y Logout
      - Login erroneo por password incorrecto
      - Login erroneo por username inexistente en DB
      - Login sin usuario 
      - Login sin contraseña
      - Login con formato de usuario no valido

  - Administración Post
     - Listar Post
     - Crear post sin publicar
     - Crear post y publicar
     - Crear post repetidos
     - Crear post y añadir etiquetas (tags)
     - Crear post y publicar 2 minutos después
     - Actualizar un post
     - Crear eliminar el post

   - Tags
     - Listar Tags
     - Crear un Tag
     - Editar Tag
     - Eliminar Tag

  - Administración Pages
     - Crear page borrador
     - Crear page y programarla
     - Crear page y publicarla
     - Listar pages
     - Listar pages borrador
     - Listar pages programadas
     - Listar pages por antiguedad de publicación
     - Listar pages por antiguedad de actualización
     - Listar pages programadas
     - Listar pages publicadas
     - Actualizar page - titulo
     - Actualizar page - agregar tag
     - Eliminar page borrador
     - Eliminar page programada
     - Eliminar page publicada


**Intrucciones para instalar las versiones de Ghost 3.41.1 y 4.41.3** 

- instalar docker usando el link de acuerdo a su sistema operativo: 
  - https://docs.docker.com/desktop/mac/install/
  - https://docs.docker.com/desktop/linux/install/
  - https://docs.docker.com/desktop/windows/install/

- instalar contenedor ghost 3.41.1 puerto 3001
  `docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1`

- instalar contenedor ghost 4.41.3 puerto 3002
  `docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.41.3 ghost:4.41.3`


**Intrucciones para para instalar y ejecutar pruebas E2E con Cypress** 

  - clonar este repositorio ejecutando en su consola el comando `git clone https://github.com/csolanor22/E2E-Ghost-Kraken.git` 
  - entrar desde la consola a la carpeta creada al clonar el repositorio E2E-Ghost-Kraken
  - ejecutar el comando `npm install cypress --save-dev` 

  - antes de ejecutar pruebas sobre ghost 3.41.1, configurar el archivo cypress.json
```
...
    "baseUrl": "http://localhost:3001",
    "env": {
      "ghost-version" : "3.41.1",
...
```
  - antes de ejecutar pruebas sobre ghost 4.41.3, configurar el archivo cypress.json
```
...
    "baseUrl": "http://localhost:3002",
    "env": {
      "ghost-version" : "4.41.3",
...
```
  - ejecutar pruebas con el comando `node_modules\.bin\cypress run --headless`


  **Nota**: en caso de necesitar reinstalar los contenedores, ejecutar los comandos: 
```  
  docker rm -f ghost_3.41.1
  docker rm -f ghost_4.41.3
```
  y ejecutar nuevamente las instrucciones para instalar las versiones de Ghost, descritas anteriormente.


**Sobre la implementación de las pruebas Cypress** 

  - se implementó el patrón given-when-then para indicar el contexto del escenario, la acción sobre la aplicación bajo pruebas y el resultado esperado:
```
 ghost admin pages
    Given admin accesses pages list option
      When admin creates new page
        √ Then admin sees new draft page in list (10040ms)
      When admin creates new schedule page
        √ Then admin sees new schedule page in list (9556ms)
      When admin creates new published page
        √ Then admin sees new published page in list (9090ms)
```
  - también se implementaron commands para agrupar funcionalidades, delegar la responsabilidad del llamado a los selectores (incluyendo los cambios de versión) y simplificar el código de pruebas: 

  cypress/integration/pages.spec.js:
```
...
	context('Given admin accesses pages list option', () => {
		beforeEach(()=>{
			cy.listPages()
			cy.newPage()
		})		

		context('When admin creates new page', () => {
			beforeEach(() => {
				cy.createPage(version, draft, desc)
			})  
			it('Then admin sees new draft page in list', () => {
				cy.listPagesAndCheck(draft);
			})
		})
...
```

  cypress/support/commands.js
```
...
Cypress.Commands.add('listPages', () => {
    cy.get('a[href="#/pages/"]').click()
    cy.url().should('include', 'pages')
    cy.wait(1000)
    cy.screenshot()
})

Cypress.Commands.add('listPagesAndCheck', (page) => {
    cy.wait(1000)
    cy.get('a[href="#/pages/"]').click()
    cy.url().should('include', 'pages')
    cy.contains(page)
    cy.screenshot()
})
...
```
  para manejar los cambios en los selectores segun la versión, se configuró la variable de ambiente ghost-version y se ajustaron los comandos impactados:
  - createPage/editPage: placeholder del titulo
  - deletePage: titulo/clase del botón settings
  - schedulePage/publishPage: clase del boton de confirmación
