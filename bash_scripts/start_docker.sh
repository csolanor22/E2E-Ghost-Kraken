echo "Creando contenedor ghost_3.41.1"
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1 &&
echo "Creando contenedor ghost_4.41.3"
docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.41.3 ghost:4.41.3