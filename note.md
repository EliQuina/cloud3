# Inicalizar el proyecto 

npm init -y

# Instalar dependencias 
npm install express         #framework de desarrollo en node
npm instal knex             # para configuracion de la bas de datos 
npm install objection       #para instalar el ORM de node 
npm install mysql2          #para instalar odbc de Mysql

# Instalar una libreria para levantar un servidor
npm install  --save-dev nodemon    #Etsa libreria solo va a estar en un entorno, pero csin la banderita es para todos los entornos

# cremos una carpeta o nicilaizamos knex

npx knex init

# Crear migraciones 
npx knex migrate:make (nombre_tabla)

npx knex migrate:make create_table_cliente
# correr o crear la migracion

npx knex migrate:latest

npx knex migrate:rollback