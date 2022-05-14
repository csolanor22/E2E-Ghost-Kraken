echo "Instalando cypress" &&
npm install cypress --save-dev &&
echo "Instalación cypress finalizada" &&
echo "Instalando módulos de Kraken" &&
cd kraken/ &&
npm install &&
cd .. &&
echo "Instalación de módulos de kraken finalizada"

source ./bash_scripts/restart_docker.sh