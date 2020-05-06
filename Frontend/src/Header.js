import React from 'react';//Lembre-se que isso é obriagtório.

export default function Header({children}){// children aqui simplifica a maneira de usar a baixo.
    return(
        <header>
            <h1>{children}</h1>{/*children pega todo conteúdo de dentro da tag */}
        </header>
    );
}
