# DockerTP

### Docker compose installation

install docker compose :
`sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`\
Mettre les droits :
`sudo chmod +x /usr/local/bin/docker-compose`\
Tester l’installation :
`docker-compose --version`\

### Créer une App 

Installer node, npm et express
Creer app.js ( afficher hello world )

### Créer un Dockerfile

FROM dernier version debian
RUN apt update -y ( pour valider automatiquement) node npm ( toutes les installations dans un seul run pour alléger l’image )

-> error lors de l’installation de nodejs : nous avons donc installé également curl , gnupg, gnupg1, gnupg2

créer un dossier dans user/tp
WORKDIR: définie l’espace de travail ( user/tp )
Copy package.json et app.js dans l’espace de travail
RUN npm update : ( appliquer les dépendance liée à node )
Ouvre le port 3000 (le même quand dans l’application )
CMD : lancer une commande une fois que le conteneur est lancé

### Créer une seconde image ( pour la base de donnée)

docker pull mysql:5.6 ( récupérer mysql 5.6 sur docker hub public car nous avons rencontré des erreures avec la version 8 )

`docker run --name node-mysql -e MYSQL_ROOT_PASSWORD=1234 -d mysql:latest`\
Permet de démarrer le serveur ( -d en back ground )

npm install mysql --save : ajouter la dépendance avec myspql ( node )  -> rebuild
`docker build -t node-app .` \

! erreur car les conteneur sont arreter mais ne tourne plus -> ajouter --rm dans les commande run pour les supprimer lorsqu’on les stop.

Créer un fichier start.sql : il permet d’initialiser la base de donnée ( créer un table et la remplir )

On créer un docker file pour mysql :

`docker run -d --rm --name my-mysql -e MYSQL_ROOT_PASSWORD=1234 my-mysql` \

### Connection 

On modifie le code de l’app pour se connecter et récupérer les data de la base de donnée
Modifie l’hostname “localhost” en db

Ensuite on créer un fichier docker-compose.yml pour mettre démarrer les deux dockers et d’ajouter certaine contrainte ( comme attendre le démarrage de la base de donnée avant de s’y connecter)

Lancer le docker-compose.yml pour démarrer les containeurs : docker-compose up
