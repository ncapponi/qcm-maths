# QCM Maths 1ère

Un QCM sur les maths de 1ère, basé sur le programme officiel 2026 sur les automatismes. 

## Utilisation

* Télecharger qcm.zip
* unzip qcm.zip
* Ouvrir `index.html` dans n'importe quel navigateur — aucun serveur nécessaire.

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

## Ajouter / modifier des questions

Modifier **`questions.js`**. Chaque question est un objet dans le tableau `questions` :

```js
{
  id: 4,                           // identifiant unique
  text: "Votre question ici ?",    // texte de la question
  choices: [
    { label: "A", text: "Première option" },
    { label: "B", text: "Deuxième option" },
    { label: "C", text: "Troisième option" },
    { label: "D", text: "Quatrième option" }
  ],
  answer: "B",                     // label de la bonne réponse
  explanation: "Pourquoi B est correct." // affiché en cas de mauvaise réponse
}
```

Pour créer des variantes, dupliquer une question existante, changer son `id` et modifier les valeurs.

## Catégories à tester
* calcul numérique et algébrique
 * comparaison de nombres (avec fractions, racine carrées, ...)
 * opérations et comparaisons entre fractions simples
 * opérations sur les puissances
 * passage d'une écriture d'un nombre à un autre (décimale, fractionnaire, pourcentage)
 * estimer un ordre de grandeur
 * effectuer des conversions d'unités (longueurs, aires, volumes, contenances, durées, vitesses, masses)
 * calcul littéral élémentaire
   * expressions additives: -(a+b)=-a-b, -(a-b)=b-a
   * expressions mutiplicatives: 
      * x=1*x,x=x/1,(-1)*a=a/(-1)=-a
      * 0=0*x,0/a=0,x/a=(1/a)*x,ab/c=a*(b/c)=(a/c)*b
      * 1/(1/a)=a,1/(a/b)=b/a,(a/b)/(c/d)=a/b*d/c=ad/(bc)
 * développer, factoriser, réduire une expression algébrique simple 
