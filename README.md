# QCM

A simple HTML/JavaScript quiz (QCM — Questionnaire à Choix Multiples) for students.

## Usage

Open `index.html` in any browser — no server needed.

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

## Adding / modifying questions

Edit **`questions.js`**. Each question is an object in the `questions` array:

```js
{
  id: 4,                           // unique id
  text: "Your question here?",     // question text
  choices: [
    { label: "A", text: "First option" },
    { label: "B", text: "Second option" },
    { label: "C", text: "Third option" },
    { label: "D", text: "Fourth option" }
  ],
  answer: "B",                     // correct choice label
  explanation: "Why B is correct." // shown when the user gets it wrong
}
```

To create variations, duplicate an existing question, change its `id`, and tweak the values.

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
