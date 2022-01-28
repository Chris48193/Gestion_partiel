# GestionPartiel

## Détail des pages et fonctionnalités du projet

Cette application contient trois pages, une page d'acceuil présentant l'ISFATES, une page permettant la gestion de partiels et une page de contact

### Page 1: Présentation de l'ISFATES

Utilisation des éléments riches du framework bootstrap tel que des caroussels, des cards etc.

### Page 2: Gestion de partiels

Chargement de la page avec la liste des partiels existant dans la base de donnée des partiels. Ils sont listés dans des accordéons. Par défaut, le premier accordéon est actif. En cliquant sur le titre d'un partiel, vous voyez des détails sur le partiel et à coté il existe un bouton supprimer qui, grâce à un évènement va supprimer le partiel.
À droite il existe le bouton "nouveau partiel" qui permet de créer un partiel. Tout les champs sont obligatoires. Si un champ n'est pas remplie, alors la création du partiel est impossible.

### Page 3: Page de contact

Simple page de contact nous présentant et donnant la possibilité à de potentiels recruteurs de nous contacter. Tout les champs du formulaire sont obligatoires sauf le champ description. Si le formulaire est soumit correctement, l'utilisateur recois une notification comme quoi la demande a bien été enregistrée

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
