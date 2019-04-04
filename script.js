"use strict";

var holeGame = document.querySelector('.hole_game');
var loadingSorting = document.querySelector('.loading_sorting');
var inMemory = document.querySelector('.in_memory');
var content = document.querySelector('.content');
var start; // Задача 1

function letsPlay(evt) {
  evt.preventDefault();
  content.innerHTML = "<div class=\"hole-game\">\n    <div class=\"hole\" id=\"hole1\"></div>\n    <div class=\"hole\" id=\"hole2\"></div>\n    <div class=\"hole\" id=\"hole3\"></div>\n    <div class=\"hole\" id=\"hole4\"></div>\n    <div class=\"hole\" id=\"hole5\"></div>\n    <div class=\"hole\" id=\"hole6\"></div>\n    <div class=\"hole\" id=\"hole7\"></div>\n    <div class=\"hole\" id=\"hole8\"></div>\n    <div class=\"hole\" id=\"hole9\"></div>\n    <div class=\"hole\" id=\"hole10\"></div>\n    <div class=\"hole\" id=\"hole11\"></div>\n    <div class=\"hole\" id=\"hole12\"></div>\n    <div class=\"hole\" id=\"hole13\"></div>\n    <div class=\"hole\" id=\"hole14\"></div>\n    <div class=\"hole\" id=\"hole15\"></div>\n    <div class=\"hole\" id=\"hole16\"></div>\n    </div>";
  start = setInterval(play, 1000);
}

holeGame.addEventListener('click', letsPlay);

function play() {
  var hole = document.querySelectorAll('.hole');
  var tempArray = [];

  for (var i = 0; i < 16; i++) {
    if (!hole[i].classList.contains('active')) {
      tempArray.push(i);
    } else {
      hole[i].classList.remove('active');
      hole[i].innerHTML = '';
    }
  }

  var index = Math.floor(Math.random() * 15),
      imageHole = tempArray[index];
  console.log(imageHole);
  hole[imageHole].classList.add('active');
  hole[imageHole].innerHTML = '<img src=./img/goblin.png>';
} // Задача 2. Понимаю, что можно было красивей, но переключить мозг на JS вообще не получилось :( Спагетти код получился отличный :)


loadingSorting.addEventListener('click', sorting);
var dataJSON = [{
  'id': 26,
  'title': 'Побег из Шоушенка',
  'imdb': 9.30,
  'year': 1994
}, {
  'id': 25,
  'title': 'Крёстный отец',
  'imdb': 9.20,
  'year': 1972
}, {
  'id': 27,
  'title': 'Крёстный отец 2',
  'imdb': 9.00,
  'year': 1974
}, {
  'id': 1047,
  'title': 'Тёмный рыцарь',
  'imdb': 9.00,
  'year': 2008
}, {
  'id': 223,
  'title': 'Криминальное чтиво',
  'imdb': 8.90,
  'year': 1994
}];

function sorting(evt) {
  evt.preventDefault();
  clearTimeout(start);
  content.innerHTML = '<table><tr><td>id</td><td>title</td><td>year</td><td>imdb</td></tr></table>';
  var _arr = dataJSON;

  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    content.querySelector('table').innerHTML += '<tr data-id="' + item.id + '" data-title="' + item.title + '" data-year="' + item.year + '" data-imdb="' + item.imdb.toFixed(2) + '">' + '<td>#' + item.id + '</td>' + '<td>' + item.title + '</td>' + '<td>(' + item.year + ')</td>' + '<td>imdb: ' + item.imdb.toFixed(2) + '</td>' + '</tr>';
  }

  var tr = content.querySelectorAll('tr');
  var sortedIdASC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (parseInt(a.dataset.id) > parseInt(b.dataset.id)) return 1;
    if (parseInt(a.dataset.id) < parseInt(b.dataset.id)) return -1;
  });
  var sortedIdDESC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (parseInt(a.dataset.id) < parseInt(b.dataset.id)) return 1;
    if (parseInt(a.dataset.id) > parseInt(b.dataset.id)) return -1;
  });
  var sortedTitleASC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (a.dataset.title < b.dataset.title) return 1;
    if (a.dataset.title > b.dataset.title) return -1;
  });
  var sortedTitleDESC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (a.dataset.title > b.dataset.title) return 1;
    if (a.dataset.title < b.dataset.title) return -1;
  });
  var sortedYearASC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (parseInt(a.dataset.year) > parseInt(b.dataset.year)) return 1;
    if (parseInt(a.dataset.year) < parseInt(b.dataset.year)) return -1;
  });
  var sortedYearDESC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (parseInt(a.dataset.year) < parseInt(b.dataset.year)) return 1;
    if (parseInt(a.dataset.year) > parseInt(b.dataset.year)) return -1;
  });
  var sortedImdbASC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (parseInt(a.dataset.imdb) > parseInt(b.dataset.imdb)) return 1;
    if (parseInt(a.dataset.imdb) < parseInt(b.dataset.imdb)) return -1;
  });
  var sortedImdbDESC = Array.prototype.slice.call(tr).sort(function (a, b) {
    if (parseInt(a.dataset.imdb) < parseInt(b.dataset.imdb)) return 1;
    if (parseInt(a.dataset.imdb) > parseInt(b.dataset.imdb)) return -1;
  });
  var a = 1,
      b = 1,
      c = 1,
      d = 1,
      td = tr[0].querySelectorAll('td');
  td[0].addEventListener('click', function () {
    if (a === 1) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sortedIdASC[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          content.querySelector('table').appendChild(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      a = 0;
    } else if (a === 0) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = sortedIdDESC[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _item = _step2.value;
          content.querySelector('table').appendChild(_item);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      a = 1;
    }
  });
  td[1].addEventListener('click', function () {
    if (b === 1) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = sortedTitleASC[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;
          content.querySelector('table').appendChild(item);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      b = 0;
    } else if (b === 0) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = sortedTitleDESC[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _item2 = _step4.value;
          content.querySelector('table').appendChild(_item2);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      b = 1;
    }
  });
  td[2].addEventListener('click', function () {
    if (c === 1) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = sortedYearASC[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var item = _step5.value;
          content.querySelector('table').appendChild(item);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      c = 0;
    } else if (c === 0) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = sortedYearDESC[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _item3 = _step6.value;
          content.querySelector('table').appendChild(_item3);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      c = 1;
    }
  });
  td[3].addEventListener('click', function () {
    if (d === 1) {
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = sortedImdbASC[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var item = _step7.value;
          content.querySelector('table').appendChild(item);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      d = 0;
    } else if (d === 0) {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = sortedImdbDESC[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _item4 = _step8.value;
          content.querySelector('table').appendChild(_item4);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      d = 1;
    }
  });
} // Задача 3


inMemory.addEventListener('click', function (evt) {
  evt.preventDefault();
  clearTimeout(start);
  content.innerHTML = '<table><tr><td>id</td><td>title</td><td>year</td><td>imdb</td></tr></table>';
  var _arr2 = dataJSON;

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var row = document.createElement('tr');
    content.querySelector('table').appendChild(row);
    var _td2 = [];

    for (var i = 1; i < 5; i++) {
      _td2[i] = document.createElement('td');
      row.appendChild(_td2[i]);
    }

    _td2[1].innerHTML = '#' + item.id;
    _td2[2].innerHTML = item.title;
    _td2[3].innerHTML = '(' + item.year + ')';
    _td2[4].innerHTML = 'imdb: ' + item.imdb.toFixed(2);
  }

  function create(obj) {
    var tbody = document.querySelectorAll('tr');

    for (var i = 1; i < 6; i++) {
      content.querySelector('table').removeChild(tbody[i]);
    }

    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = obj[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var item = _step9.value;
        var row = document.createElement('tr');
        content.querySelector('table').appendChild(row);
        var _td = [];

        for (var _i3 = 1; _i3 < 5; _i3++) {
          _td[_i3] = document.createElement('td');
          row.appendChild(_td[_i3]);
        }

        _td[1].innerHTML = '#' + item.id;
        _td[2].innerHTML = item.title;
        _td[3].innerHTML = '(' + item.year + ')';
        _td[4].innerHTML = 'imdb: ' + item.imdb.toFixed(2);
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
          _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }
  }

  var sortedIdASC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (parseInt(a.id) > parseInt(b.id)) return 1;
    if (parseInt(a.id) < parseInt(b.id)) return -1;
  });
  var sortedIdDESC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (parseInt(a.id) < parseInt(b.id)) return 1;
    if (parseInt(a.id) > parseInt(b.id)) return -1;
  });
  var sortedTitleASC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (a.title < b.title) return 1;
    if (a.title > b.title) return -1;
  });
  var sortedTitleDESC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  var sortedYearASC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (parseInt(a.year) > parseInt(b.year)) return 1;
    if (parseInt(a.year) < parseInt(b.year)) return -1;
  });
  var sortedYearDESC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (parseInt(a.year) < parseInt(b.year)) return 1;
    if (parseInt(a.year) > parseInt(b.year)) return -1;
  });
  var sortedImdbASC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (parseInt(a.imdb) > parseInt(b.imdb)) return 1;
    if (parseInt(a.imdb) < parseInt(b.imdb)) return -1;
  });
  var sortedImdbDESC = Array.prototype.slice.call(dataJSON).sort(function (a, b) {
    if (parseInt(a.imdb) < parseInt(b.imdb)) return 1;
    if (parseInt(a.imdb) > parseInt(b.imdb)) return -1;
  });
  var tr = content.querySelectorAll('tr');
  var a = 1,
      b = 1,
      c = 1,
      d = 1,
      td = tr[0].querySelectorAll('td');
  td[0].addEventListener('click', function () {
    if (a === 1) {
      create(sortedIdASC);
      a = 0;
    } else if (a === 0) {
      create(sortedIdDESC);
      a = 1;
    }
  });
  td[1].addEventListener('click', function () {
    if (b === 1) {
      create(sortedTitleASC);
      b = 0;
    } else if (b === 0) {
      create(sortedTitleDESC);
      b = 1;
    }
  });
  td[2].addEventListener('click', function () {
    if (c === 1) {
      create(sortedYearASC);
      c = 0;
    } else if (c === 0) {
      create(sortedYearDESC);
      c = 1;
    }
  });
  td[3].addEventListener('click', function () {
    if (d === 1) {
      create(sortedImdbASC);
      d = 0;
    } else if (d === 0) {
      create(sortedImdbDESC);
      d = 1;
    }
  });
});