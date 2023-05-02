const concerts = [
  {
    date: '2000/01/01', 
    lieu: 'Paris', 
    chanteur: 'Abba', 
    prix: 45,
  },
  {
    date: '2001/02/01', 
    lieu: 'Lyon', 
    chanteur: 'Patoche', 
    prix: 30,
  },
  {
    date: '2004/01/01', 
    lieu: 'Paris', 
    chanteur: 'The Weekend', 
    prix: 78,
  },
  {
    date: '2005/01/01', 
    lieu: 'Toulouse', 
    chanteur: 'The Week', 
    prix: 12,
  },
  {
    date: '2006/01/01', 
    lieu: 'Paris', 
    chanteur: 'Adèle', 
    prix: 49,
  },
  {
    date: '2007/05/01', 
    lieu: 'Dijon', 
    chanteur: 'Angèle', 
    prix: 56,
  },
  {
    date: '2008/01/01', 
    lieu: 'Paris', 
    chanteur: 'Lady Gaga', 
    prix: 79,
  },
  {
    date: '2009/01/01', 
    lieu: 'Marseille', 
    chanteur: 'Roosevelt', 
    prix: 25,
  },
  {
    date: '2010/08/01', 
    lieu: 'Rouen', 
    chanteur: 'VHS collection', 
    prix: 26,
  },
  {
    date: '2011/09/01', 
    lieu: 'Paris', 
    chanteur: 'Beyoncé', 
    prix: 92,
  },
];
const step = 3;
let indice = 0;
let button = document.querySelector('button');

const list = document.querySelector('#content');

function createItem(item)
{
  let htmlItem = document.createElement('li');
  htmlItem.innerHTML = `
    <p>${item.chanteur}</p>
    <p>à ${item.lieu} le ${item.date}</p>
    <span>${item.prix}€</span>
  `;

  list.appendChild(htmlItem);
}

function generateItems()
{
  const max = indice+step < concerts.length ? indice+step : concerts.length
  for(indice; indice < max; indice++){
    createItem(concerts[indice]);
  }
  if (indice === concerts.length){
    button.classList.add('hide');
  }
}

button.addEventListener('click', generateItems)