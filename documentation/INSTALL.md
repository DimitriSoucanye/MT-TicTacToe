<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [MT Tic Tac Toe - Installation du projet](#mt-tic-tac-toe---installation-du-projet)
  - [Prérequis](#pr%C3%A9requis)
  - [Architecture générale du projet](#architecture-g%C3%A9n%C3%A9rale-du-projet)
    - [Lancement du projet, étape par étape](#lancement-du-projet-%C3%A9tape-par-%C3%A9tape)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# MT Tic Tac Toe - Installation du projet

Cette documentation permet l'installation complète du projet.

## Prérequis
- Un émulateur / simulateur via [Android Studio](https://developer.android.com/) ou [xCode](https://developer.apple.com/xcode/resources/), ou un appareil physique

## Architecture générale du projet

### Lancement du projet, étape par étape

Installation des dépendances :

```bash
yarn install
```

Création des builds de développement:
```
eas build --profile mt-tictactoe-local --platform android --local
```

```
eas build --profile mt-tictactoe-local --platform ios --local
```

Lancement du serveur node en local sur votre machine :

```bash
yarn start
```

Puis lancez l'application sur votre émulateur / simulateur ou appareil physique, sélectionnez le serveur et Voilà !
