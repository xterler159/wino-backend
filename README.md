# Wino backend technical test

Test technique réalisé pour wino. <br> <br>
C'est un simple API RESTful qui permet de consulter des ventes `/sales` réalisé par x et qui permet aussi de consulter le montant total des ventes `/total-sales`. <br>
Cet API permet aussi la génération d'un fichier excel avec ces ventes, sur la route `/export-sales`

# First step


#### Il faut inclure un fichier de déclaration `index.d.ts` de modules TypeScript dans le package pg-async

```typescript
declare module 'pg-async';
```
Le placer dans la racine du package.<br>
En effet, il y a pas de @types/pg-async à ce jour.