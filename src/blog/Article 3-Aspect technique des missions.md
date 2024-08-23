---
title: 3- Aspect technique des missions
date: 2024-05-06
---

## Introduction

Au cours de mon stage chez Asiaction, j'ai été chargé de développer un système de recherche complet permettant de parcourir les produits des catalogues de leurs collaborateurs. Cet article détaille les aspects techniques du projet, les technologies et services utilisés, ainsi que l'architecture du système.

## Objectif du Projet

Le but du projet était de créer un système efficace pour rechercher et analyser les produits présents dans les catalogues fournis par les partenaires d'Asiaction. Ce système devait permettre une recherche avancée et un traitement efficace des données.

## Technologies et Services Utilisés

### 1. **Services AWS**

- **Amazon S3** : Utilisé pour le stockage des fichiers des catalogues. Amazon S3 offre une solution scalable pour stocker de grandes quantités de données et facilite l'accès rapide aux fichiers nécessaires pour la recherche.

- **Amazon DynamoDB** : Employé pour stocker les informations structurées des produits. DynamoDB est une base de données NoSQL entièrement gérée qui permet des lectures et écritures rapides et scalable.

- **Amazon OpenSearch Service** : Utilisé pour les capacités de recherche avancée. OpenSearch (anciennement connu sous le nom d'Amazon Elasticsearch Service) permet des recherches full-text et l'analyse des données de manière efficace.

- **AWS Lambda** : Développé pour exécuter des fonctions en réponse à des événements, telles que des uploads de fichiers dans S3 ou des requêtes API. Lambda a permis d'automatiser le traitement des données sans avoir à gérer les serveurs.

- **Amazon API Gateway** : Utilisé pour créer, déployer et gérer les API. API Gateway a facilité la création des endpoints API pour que le frontend puisse interagir avec le backend.

- **Amazon CloudWatch** : Utilisé pour la surveillance et le logging des activités du système. CloudWatch a permis de suivre les performances et les erreurs en temps réel.

### 2. **Développement Web**

- **PHP** : Utilisé pour le développement de la partie web du système. PHP a permis de créer les pages web nécessaires et d'intégrer les appels API pour interagir avec le backend.

- **HTML/CSS/JavaScript** : Utilisé pour le développement de l'interface utilisateur. Ces technologies ont permis de créer une interface interactive et conviviale pour les utilisateurs finaux.

## Architecture du Système

### 1. **Backend**

Le backend du système a été développé en utilisant les services AWS. Voici un aperçu de l'architecture :
- Les fichiers des catalogues sont stockés dans **Amazon S3**.
- Les informations structurées sur les produits sont stockées dans **Amazon DynamoDB**.
- Les capacités de recherche sont fournies par **Amazon OpenSearch Service**.
- Les fonctions de traitement et de gestion des événements sont gérées par **AWS Lambda**.
- Les APIs sont créées et gérées via **Amazon API Gateway**.

### 2. **Frontend**

Le frontend, développé en **PHP**, communique avec le backend via les API fournies par Amazon API Gateway. Le site web permet aux utilisateurs de rechercher et d'afficher les produits en utilisant l'interface développée avec **HTML, CSS et JavaScript**.

### 3. **Traitement des Données**

- Les fichiers de catalogues sont chargés dans S3, et les données sont extraites et stockées dans DynamoDB.
- Les fonctions Lambda sont déclenchées pour traiter les données et mettre à jour les informations dans OpenSearch.
- Les appels API sont effectués depuis le frontend pour interagir avec les données et afficher les résultats de recherche.

### 4. **Surveillance et Logs**

**Amazon CloudWatch** est utilisé pour la surveillance en temps réel et le logging des événements du système, ce qui permet de suivre les performances et de diagnostiquer les problèmes éventuels.

## Défis Techniques

- **Scalabilité des Données** : La gestion de grandes quantités de données dans S3 et DynamoDB a nécessité une conception attentive pour assurer la performance et la scalabilité.
- **Intégration des Services** : L'intégration des différents services AWS, ainsi que l'interaction entre le backend et le frontend en PHP, a impliqué des défis techniques pour assurer une communication fluide et efficace.

## Conclusion

Le projet a impliqué l'utilisation de services AWS pour créer une solution robuste et scalable, tout en intégrant PHP pour le développement web. Cette expérience m'a permis de renforcer mes compétences en développement cloud et en intégration de systèmes complexes.