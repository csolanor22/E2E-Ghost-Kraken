# E2E-Ghost-Kraken

Integrantes:

- ANDERSON GIOVANNY CASTIBLANCO PRIETO (ag.castiblanco1207@uniandes.edu.co)
- MARLON MAURICIO AGON FLOREZ (m.agonf@uniandes.edu.co)
- CESAR ALFONSO SOLANO RUIZ (c.solanor@uniandes.edu.co)
- ANA LUCIA FORERO NEME (a.foreron@uniandes.edu.co)

## Ghost

**Intrucciones para instalar las versiones de Ghost 3.41.1 y 4.41.3 usando contenedores de Docker**

- Instalar docker usando el link de acuerdo a su sistema operativo:

  - https://docs.docker.com/desktop/mac/install/
  - https://docs.docker.com/desktop/linux/install/
  - https://docs.docker.com/desktop/windows/install/

- Instalar contenedor ghost 3.41.1 puerto 3001
  `docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1`

- Instalar contenedor ghost 4.41.3 puerto 3002
  `docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.41.3 ghost:4.41.3`

**Nota**: en caso de necesitar reinstalar los contenedores, ejecutar los comandos:

```
  docker rm -f ghost_3.41.1
  docker rm -f ghost_4.41.3

  docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1
  docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.41.3 ghost:4.41.3

```

## Kraken

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
- Dentro de la carpeta kraken del proyecto ejecute el comando npm install
- Puede usar el comando `npx kraken-node run` ó `kraken-node run` para correr las pruebas
- En el archivo properties.json que se encuentra dentro de la carpeta kraken debe cambiar la variable `BASE_URL` a `http://localhost:3001` si se requiere probar la versión 3.41.1 o cambiarla a `http://localhost:3002` si se requiere probar la versión 4.41.3.

**Sobre la implementación de las pruebas con Kraken**

- Se implementó el patrón given-when-then para indicar el contexto del escenario, la acción sobre la aplicación bajo pruebas y el resultado esperado:

```
  @user1 @web
Scenario: Creacion de usuario con email inválido
    Given I navigate to register page "<BASE_URL>"
    And I wait for 2 seconds
    And I take a screenshot "1"
    When I enter new site title "<NEW_SITE_TITLE>"
    And I take a screenshot "2"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I take a screenshot "3"
    And I enter sign up email "<NEW_INVALID_MAIL>"
    And I take a screenshot "4"
    And I enter new password "<PASSWORD1>"
    And I take a screenshot "5"
    Then I click signup
    And I wait for 1 seconds
    And I take a screenshot "6"
    And I expect error message "<INVALID_MAIL_MSG>"
    And I take a screenshot "7"
```

- En el archivo properties.json se incluyeron variables para adaptar las pruebas a la versión requerida, ya sea la 3.41.1 o la 4.41.3
  - Este archivo también incluye variables que almacenan mensajes de error, mensajes de éxito y datos del usuario que se crea como administrador.

## Cypress

**Funcionalidades y escenarios**

- Ingresar a la aplicacion:

  - Login exitoso y Logout
  - Login erroneo por password incorrecto
  - Login erroneo por username inexistente en DB
  - Login sin usuario
  - Login sin contraseña
  - Login con formato de usuario no valido

- Administración Post

  - Crear post borrador
  - Crear post y programarlo
  - Crear post y publicarlo
  - Listar post
  - Listar post borradores
  - Listar post programados
  - Listar post por antiguedad de publicación
  - Listar post por antiguedad de actualización
  - Actualizar post - titulo y contenido
  - Actualizar post - agregar tag
  - Eliminar post

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

**Intrucciones para instalar y ejecutar pruebas E2E con Cypress**

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

- ejecutar todas las pruebas con el comando `node_modules\.bin\cypress run --headless --spec "cypress/integration/*.spec.js"`, incluidas las VRT. Como resultado debe obtener:

![cypress-tests-finished](https://user-images.githubusercontent.com/98719877/168498434-42724356-29f8-4f0a-8dbd-31387ba245dc.png)

- en la ruta cypress\screenshots puede revisar las capturas de pantalla generadas durante la prueba


**Sobre la implementación de las pruebas Cypress**

- se implementó el patrón given-when-then para indicar el contexto del escenario, la acción sobre la aplicación bajo pruebas y el resultado esperado:

```
  ghost admin visual regression tests
    Given admin accesses post list option
      When admin creates new published post
        √ Then admin sees new published post in list (24287ms)
    Given admin accesses pages list option
      When admin creates new published page
        √ Then admin sees new published page in list (15976ms)
    Given admin access posts list option for editing
      When admin edits title of a published post
        √ Then admin sees new title checking published post (16684ms)
    Given admin access pages list option for editing
      When admin edits title of a published page
        √ Then admin sees new title checking published page (14630ms)
    Given admin accesses post list option for delete
      When admin delete a published post
        √ Then admin sees an empty published posts list (13444ms)
    Given admin accesses pages list option for delete
      When admin delete a published page
        √ Then admin sees an empty published pages list (13370ms)
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

```
...
Cypress.Commands.add('createPage', (version, title, description) => {
  if (version == '4.41.3')
      cy.get('textarea[placeholder="Page title"]').type(title)
  else
      cy.get('textarea[placeholder="Page Title"]').type(title)
  cy.get('.koenig-editor__editor-wrapper').type(description +'{enter}')
  cy.wait(1000)
  cy.screenshot()
})
...
Cypress.Commands.add('publishPage', (version) => {
  cy.contains('Publish').click()
  cy.screenshot()
  if (version == '4.41.3')
      cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
  else
      cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
  cy.wait(1000)
})
...
```
