# Oracle SQL Concat and Formatting With Invisible Characters

I work in Oracle SQL a good bit and for a while I've known how to concatenate values. You use 2 consecutive vertical bar characters:

> ||

I've been concating returned values to quickly create new queries with the exact information I need. I get something back like this:

> 2364, 'string', 762378562873, true, 0, 973597

I would then cut and paste this into a predefined and nicely formatted query. After a while I got tired of copying and pasting. My queries were becoming very routine so I decided to return the full query I needed to run with the data I was collecting in the exact format I wanted.

### Here's what I needed:
- || for concatenation
- Escape single quotes with an extra single quote. This creates a string with 1 single quote in it.
    - ```sql
        ''''
        ```
- CHR(10) for a new line
- CHR(9) for a tab

That's it! With these character(s) you can format what's returned in your select queries in order to return follow-up queries formatted exactly how you want them along with all the info you need :) Happy Oracle SQL-ing!

An example might be something like:

```sql
select
'INSERT INTO TABLE_NAME_FOR_INSERT(' || CHR(10) || 
CHR(9) || 'ID,' || CHR(10) || 
CHR(9) || 'NAME,' || CHR(10) || 
CHR(9) || 'DESCRIPTION,' || CHR(10) || 
CHR(9) || 'QTY,' || CHR(10) || 
') VALUES (' || CHR(10) ||
CHR(9) || 'TABLE_NAME_ID.nextval,' || CHR(10) ||
CHR(9) || tfs.name || ',' || CHR(10) ||
CHR(9) || tfs.description || ',' || CHR(10) ||
CHR(9) || tfs.qty || ',' || CHR(10) ||
');'
from TABLE_NAME_FOR_SELECT tfs
where <where clause>;
```