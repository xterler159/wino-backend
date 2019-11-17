# Wino backend technical test

## FR

Test technique réalisé pour wino. <br> <br>
C'est un simple API RESTful qui permet de consulter des ventes `/sales` réalisé par x et qui permet aussi de consulter le montant total des ventes `/total-sales`. <br>
Cet API permet aussi la génération d'un fichier excel avec ces ventes, sur la route `/export-sales`

Environnement technologique utilisées: 
* NodeJs
* koa.js
* postgreSQL
* pg-async
* TypeScript
* sheet.js

# Étape 1

1. Créer une base de donnée nommé `wino_api`. <br>
    `CREATE DATABASE wino_api;`
2. Se connecter à cette base de donnée <br>
    `\c wino_api`
3. Créer la table sales <br>
    ```sql
    CREATE TABLE sales (
        id serial PRIMARY KEY,
        name VARCHAR(255),
        amount float(3)
    );
    ```
4. Insérer des données bidons <br>
    ```sql
    INSERT INTO sales(name, amount)
    VALUES ('Louise', 10), ('Maxime', 5457.51), ('Jean', 68.88);
    ```
5. Modifier la configuration dans `src\models\Sales.ts`. Remplacez par vos identifiants. <br>
Vous avez des données nécessaire pour faire fonctionner cet API.

# Étape 2

1. `npm install` <br>
2. Copier le fichier `index.d.ts` et le placer dans node_modules/pg-async. C'est important car il y a pas encore de @types/pg-async à ce jour.<br>
3. `npm start` -> http://localhost:3000


```typescript
declare module 'pg-async';
```
Le placer dans la racine du package.<br>
En effet, il y a pas de @types/pg-async à ce jour.

## EN
