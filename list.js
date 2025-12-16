// STARÝ KÓD:

// document.querySelector('form').onsubmit = () => {

//     // storage
//     if (!localStorage.getItem('ukoly')) {
//         localStorage.setItem('ukoly', '');
//     }

//     let uloziste = localStorage.getItem('ukoly');
//     localStorage.setItem('ukoly', uloziste);

//     document.querySelector('#list').innerHTML = localStorage.getItem('ukoly');

//     // Create new item for list
//     const li = document.createElement('li');
//     li.innerHTML = document.querySelector('#ukol').value;

//     // Prevent adding empty tasks
//     if (li.innerHTML === '')
//         return false


//     // Add new item to task list
//     document.querySelector('#list').append(li);

//     // Clear input field
//     document.querySelector('#ukol').value = '';

//     // Stop form from submitting
//     return false;

// };


// pokud ještě v localStorage není "ukoly", vytvoř prázdný seznam
if (!localStorage.getItem('ukoly')) {
    localStorage.setItem('ukoly', '');
}

// načti uložené úkoly
document.querySelector('#list').innerHTML = localStorage.getItem('ukoly');

// přidání úkolu po odeslání formuláře
document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();

    const text = document.querySelector('#ukol').value;
    if (text === '')
        return; // prázdný úkol nepřidávej

    // přidej nový <li>
    const li = document.createElement('li');
    li.innerHTML = text;
    document.querySelector('#list').append(li);

    // ulož aktualizovaný seznam do localStorage
    localStorage.setItem('ukoly', document.querySelector('#list').innerHTML);

    // vymaž vstup
    document.querySelector('#ukol').value = '';

};

document.querySelector('#smazat').onclick = () => {
    localStorage.removeItem('ukoly');
    document.querySelector('#list').innerHTML = '';
};