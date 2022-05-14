docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42 &&
docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0