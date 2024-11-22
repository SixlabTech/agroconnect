# Documentation du Projet

## Introduction

Ce document fournit une documentation complète sur le workflow de gestion des branches pour ce projet.

## Workflow de Gestion des Branches

### 1. Créer et travailler sur une branche `feat`

Pour chaque nouvelle fonctionnalité, créez une nouvelle branche `feat` :

```sh
git checkout -b feat/nom-de-la-fonctionnalite
# Faites vos modifications et commits
git add .
git commit -m "Ajout de la fonctionnalité X"

#
git push origin feat:develop

git fetch origin
git log origin/develop
