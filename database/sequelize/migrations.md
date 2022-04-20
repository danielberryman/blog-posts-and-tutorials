# Migrations

## Commands
```
npx sequelize-cli migration:generate --name migration-name
npx sequelize-cli db:migrate
```

## Columns
- Add
```
await queryInterface.addColumn('Table', 'fieldName', { type: Sequelize.TYPE });
```
- Remove
```
await queryInterface.removeColumn('Table', 'fieldName', { type: Sequelize.TYPE });
```
- Rename
```
await queryInterface.renameColumn('Table', 'newFieldName', 'fieldName');
```
