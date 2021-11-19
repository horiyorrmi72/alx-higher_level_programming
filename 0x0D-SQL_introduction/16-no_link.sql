-- script that list all records of the table second_table
-- dont list rows without a name value
-- results should display score and name
-- record should be listed by descending score
-- the database name will be passed as an argument to the mysql

SELECT score, name
FROM second_table
HAVING name IS NOT NULL
ORDER BY score DESC;
