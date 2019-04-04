const holeGame = document.querySelector('.hole_game');
const loadingSorting = document.querySelector('.loading_sorting');
const inMemory = document.querySelector('.in_memory');
const content = document.querySelector('.content');
let start;

// Задача 1
function letsPlay(evt) {
  evt.preventDefault();
  content.innerHTML = `<div class="hole-game">
    <div class="hole" id="hole1"></div>
    <div class="hole" id="hole2"></div>
    <div class="hole" id="hole3"></div>
    <div class="hole" id="hole4"></div>
    <div class="hole" id="hole5"></div>
    <div class="hole" id="hole6"></div>
    <div class="hole" id="hole7"></div>
    <div class="hole" id="hole8"></div>
    <div class="hole" id="hole9"></div>
    <div class="hole" id="hole10"></div>
    <div class="hole" id="hole11"></div>
    <div class="hole" id="hole12"></div>
    <div class="hole" id="hole13"></div>
    <div class="hole" id="hole14"></div>
    <div class="hole" id="hole15"></div>
    <div class="hole" id="hole16"></div>
    </div>`;
  start = setInterval(play, 1000);
}

holeGame.addEventListener('click', letsPlay);

function play() {
  const hole = document.querySelectorAll('.hole');
  let tempArray = [];
  for (let i = 0; i < 16; i++) {
    if (!hole[i].classList.contains('active')) {
      tempArray.push(i);
    } else {
      hole[i].classList.remove('active');
      hole[i].innerHTML = '';
    }
  }
  let index = Math.floor(Math.random() * 15),
    imageHole = tempArray[index];
  console.log(imageHole);
  hole[imageHole].classList.add('active');
  hole[imageHole].innerHTML = '<img src=./img/goblin.png>';
}

// Задача 2. Понимаю, что можно было красивей, но переключить мозг на JS вообще не получилось :( Спагетти код получился отличный :)
loadingSorting.addEventListener('click', sorting);

const dataJSON = [
  {
    'id': 26,
    'title': 'Побег из Шоушенка',
    'imdb': 9.30,
    'year': 1994,
  },
  {
    'id': 25,
    'title': 'Крёстный отец',
    'imdb': 9.20,
    'year': 1972,
  },
  {
    'id': 27,
    'title': 'Крёстный отец 2',
    'imdb': 9.00,
    'year': 1974,
  },
  {
    'id': 1047,
    'title': 'Тёмный рыцарь',
    'imdb': 9.00,
    'year': 2008,
  },
  {
    'id': 223,
    'title': 'Криминальное чтиво',
    'imdb': 8.90,
    'year': 1994,
  },
];

function sorting(evt) {
  evt.preventDefault();
  clearTimeout(start);
  content.innerHTML = '<table><tr><td>id</td><td>title</td><td>year</td><td>imdb</td></tr></table>';
  for (let item of dataJSON) {
    content.querySelector('table').innerHTML += '<tr data-id="' + item.id + '" data-title="' + item.title + '" data-year="' + item.year + '" data-imdb="' + item.imdb.toFixed(2) + '">'
      + '<td>#' + item.id + '</td>'
      + '<td>' + item.title + '</td>'
      + '<td>(' + item.year + ')</td>'
      + '<td>imdb: ' + item.imdb.toFixed(2) + '</td>'
      + '</tr>';
  }

  const tr = content.querySelectorAll('tr');

  let sortedIdASC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (parseInt(a.dataset.id) > parseInt(b.dataset.id)) return 1;
      if (parseInt(a.dataset.id) < parseInt(b.dataset.id)) return -1;
    });
  let sortedIdDESC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (parseInt(a.dataset.id) < parseInt(b.dataset.id)) return 1;
      if (parseInt(a.dataset.id) > parseInt(b.dataset.id)) return -1;
    });
  let sortedTitleASC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (a.dataset.title < b.dataset.title) return 1;
      if (a.dataset.title > b.dataset.title) return -1;
    });
  let sortedTitleDESC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (a.dataset.title > b.dataset.title) return 1;
      if (a.dataset.title < b.dataset.title) return -1;
    });
  let sortedYearASC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (parseInt(a.dataset.year) > parseInt(b.dataset.year)) return 1;
      if (parseInt(a.dataset.year) < parseInt(b.dataset.year)) return -1;
    });
  let sortedYearDESC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (parseInt(a.dataset.year) < parseInt(b.dataset.year)) return 1;
      if (parseInt(a.dataset.year) > parseInt(b.dataset.year)) return -1;
    });
  let sortedImdbASC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (parseInt(a.dataset.imdb) > parseInt(b.dataset.imdb)) return 1;
      if (parseInt(a.dataset.imdb) < parseInt(b.dataset.imdb)) return -1;
    });
  let sortedImdbDESC = Array.prototype.slice.call(tr)
    .sort(function (a, b) {
      if (parseInt(a.dataset.imdb) < parseInt(b.dataset.imdb)) return 1;
      if (parseInt(a.dataset.imdb) > parseInt(b.dataset.imdb)) return -1;
    });
  let a = 1,
    b = 1,
    c = 1,
    d = 1,
    td = tr[0].querySelectorAll('td');
  td[0].addEventListener('click', () => {
    if (a === 1) {
      for (let item of sortedIdASC) {
        content.querySelector('table')
          .appendChild(item);
      }
      a = 0;
    } else if (a === 0) {
      for (let item of sortedIdDESC) {
        content.querySelector('table')
          .appendChild(item);
      }
      a = 1;
    }
  });
  td[1].addEventListener('click', () => {
    if (b === 1) {
      for (let item of sortedTitleASC) {
        content.querySelector('table')
          .appendChild(item);
      }
      b = 0;
    } else if (b === 0) {
      for (let item of sortedTitleDESC) {
        content.querySelector('table')
          .appendChild(item);
      }
      b = 1;
    }
  });
  td[2].addEventListener('click', () => {
    if (c === 1) {
      for (let item of sortedYearASC) {
        content.querySelector('table')
          .appendChild(item);
      }
      c = 0;
    } else if (c === 0) {
      for (let item of sortedYearDESC) {
        content.querySelector('table')
          .appendChild(item);
      }
      c = 1;
    }
  });
  td[3].addEventListener('click', () => {
    if (d === 1) {
      for (let item of sortedImdbASC) {
        content.querySelector('table')
          .appendChild(item);
      }
      d = 0;
    } else if (d === 0) {
      for (let item of sortedImdbDESC) {
        content.querySelector('table')
          .appendChild(item);
      }
      d = 1;
    }
  });
}

// Задача 3
inMemory.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearTimeout(start);
  content.innerHTML = '<table><tr><td>id</td><td>title</td><td>year</td><td>imdb</td></tr></table>';
  for (let item of dataJSON) {
    let row = document.createElement('tr');
    content.querySelector('table')
      .appendChild(row);
    let td = [];
    for (let i = 1; i < 5; i++) {
      td[i] = document.createElement('td');
      row.appendChild(td[i]);
    }
    td[1].innerHTML = '#' + item.id;
    td[2].innerHTML = item.title;
    td[3].innerHTML = '(' + item.year + ')';
    td[4].innerHTML = 'imdb: ' + item.imdb.toFixed(2);
  }

  function create(obj) {
    let tbody = document.querySelectorAll('tr');
    for (let i = 1; i < 6; i++) {
      content.querySelector('table')
        .removeChild(tbody[i]);
    }
    for (let item of obj) {
      let row = document.createElement('tr');
      content.querySelector('table')
        .appendChild(row);
      let td = [];
      for (let i = 1; i < 5; i++) {
        td[i] = document.createElement('td');
        row.appendChild(td[i]);
      }
      td[1].innerHTML = '#' + item.id;
      td[2].innerHTML = item.title;
      td[3].innerHTML = '(' + item.year + ')';
      td[4].innerHTML = 'imdb: ' + item.imdb.toFixed(2);
    }
  }

  let sortedIdASC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (parseInt(a.id) > parseInt(b.id)) return 1;
      if (parseInt(a.id) < parseInt(b.id)) return -1;
    });
  let sortedIdDESC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (parseInt(a.id) < parseInt(b.id)) return 1;
      if (parseInt(a.id) > parseInt(b.id)) return -1;
    });
  let sortedTitleASC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
    });
  let sortedTitleDESC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    });
  let sortedYearASC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (parseInt(a.year) > parseInt(b.year)) return 1;
      if (parseInt(a.year) < parseInt(b.year)) return -1;
    });
  let sortedYearDESC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (parseInt(a.year) < parseInt(b.year)) return 1;
      if (parseInt(a.year) > parseInt(b.year)) return -1;
    });
  let sortedImdbASC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (parseInt(a.imdb) > parseInt(b.imdb)) return 1;
      if (parseInt(a.imdb) < parseInt(b.imdb)) return -1;
    });
  let sortedImdbDESC = Array.prototype.slice.call(dataJSON)
    .sort(function (a, b) {
      if (parseInt(a.imdb) < parseInt(b.imdb)) return 1;
      if (parseInt(a.imdb) > parseInt(b.imdb)) return -1;
    });
  const tr = content.querySelectorAll('tr');
  let a = 1,
    b = 1,
    c = 1,
    d = 1,
    td = tr[0].querySelectorAll('td');
  td[0].addEventListener('click', () => {
    if (a === 1) {
      create(sortedIdASC);
      a = 0;
    } else if (a === 0) {
      create(sortedIdDESC);
      a = 1;
    }
  });
  td[1].addEventListener('click', () => {
    if (b === 1) {
      create(sortedTitleASC);
      b = 0;
    } else if (b === 0) {
      create(sortedTitleDESC);
      b = 1;
    }
  });
  td[2].addEventListener('click', () => {
    if (c === 1) {
      create(sortedYearASC);
      c = 0;
    } else if (c === 0) {
      create(sortedYearDESC);
      c = 1;
    }
  });
  td[3].addEventListener('click', () => {
    if (d === 1) {
      create(sortedImdbASC);
      d = 0;
    } else if (d === 0) {
      create(sortedImdbDESC);
      d = 1;
    }
  });
});
