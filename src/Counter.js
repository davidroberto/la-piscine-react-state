import { useState } from 'react';

const Counter = () => {

    // on utilise une fonction de React 'useState'
    // cette fonction permet de stocker une valeur en dehors de notre composant
    // (pour garder sa valeur à chaque appel du composant, à chaque "render")

    // useState prend en parametre la valeur initiale qu'on veut donner (ici 0)
    // et retourne deux éléments (dans un tableau)
    // le premier est la valeur actualisée de la variable
    // le deuxième est une fonction qui permet de modifier la valeur
    // par convention, on nomme la fonction qui modifie avec : "setNomDeLaVariable"

    // à chaque appel de la fonction qui modifie (setXXXX), react fait un "re-render"
    // de notre composant. C'est à dire qu'il re-execute la fonction Counter
    // de notre composant. C'est à dire qu'il re-execute la fonction Counter
    const [counter, setCounter] = useState(0);
    
    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>Nom : Robert</p>
        </div>
    );
}

export default Counter;