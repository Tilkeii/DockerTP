FROM mysql:5.6

# Add a database
ENV MYSQL_DATABASE test

# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY start.sql /docker-entrypoint-initdb.d/start.sql