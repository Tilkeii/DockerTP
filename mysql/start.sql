CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);
INSERT INTO Persons(ID, LastName, FirstName, Age) VALUES(1, 'Florian', 'Gouarin', 22);