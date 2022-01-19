# MySQL database and table commands
*mysql keywords are case insensitive*

---

## DATABASE

### **List dbs**
SHOW DATABASES;
### **Create db**
CREATE DATABASE dbname;
### **Delete db**
DROP DATABASE dbname;
### **Modify db**
ALTER DATABASE dbname *...modifications*;

## DATABASE MODIFICATIONS
...

---

## TABLE

### **List tables**
SHOW TABLES;
### **Create table**
CREATE TABLE tblname(*...column definitions*);
### **Delete table**
DROP TABLE tblname;
### **Modify table**
ALTER TABLE tblname *...modifications*;

## TABLE COLUMN DEFINITIONS
1. column_name 
2. data_type(length) 
   - String
     - CHAR
     - VARCHAR
     - TEXT
     - ENUM
     - SET
   - Numeric
     - BOOL or BOOLEAN (0 is false and non-zero values are true)
     - INT or INTEGER
     - BIGINT
     - FLOAT
     - DOUBLE
   - Date and Time
     - *fsp means 'fractional seconds precision'*
     - DATE (YYYY-MM-DD)
     - DATETIME (YYYY-MM-DD hh:mm:ss)
     - TIMESTAMP (number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC); format is YYYY-MM-DD hh:mm:ss)
     - TIME (hh:mm:ss)
     - YEAR (4 digit format)
3. [NOT NULL] *constraint*
4. [DEFAULT value] *constraint*
5. [AUTO_INCREMENT] 
6. other column_constraints
   - UNIQUE (allows no dups in column; add the word to the end of a column's clause)
   - PRIMARY KEY
     - EX: CREATE TABLE tblname(..., PRIMARY KEY (ColName));
   - FOREIGN KEY
     - EX: CREATE TABLE tblname(..., FOREIGN KEY (ColName) REFERENCES OtherTable(ColName));
   - CHECK (allows you to set limits on the value. Example would be an 'age' column where you specify the age must be >= 18)
     - EX: CREATE TABLE tblname(..., AGE int, CHECK(Age>=18));
   - INDEX (*this is a complex topic. needs it's own page*)
   - *NOT NULL*
   - *DEFAULT*

## TABLE MODIFICATIONS

### Add Column
ALTER TABLE tablename ADD COLUMN name type;