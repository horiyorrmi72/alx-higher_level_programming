-- script that list all number of records with the same score

SELECT score,COUNT(1) AS number FROM second_table
GROUP BY score
ORDER BY number DESC;
