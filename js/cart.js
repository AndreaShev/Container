"use strict";

function getObjEntries(e) {
	for(var t = Object.keys(e), n = t.length, c = new Array(n); n--;) c[n] = [t[n], e[t[n]]];
	return c
}


function buildLinks() {
	for (var key = 0; key < customLinks.length; key++) {
		var link = customLinks[key],
			a = document.createElement("a"),
			linkText = link.innerHTML,
			linkClass= link.className,
			linkHref = linksObj[link.getAttribute("links")];
		
		a.innerHTML = linkText;
		a.className = linkClass;
		a.href = linkHref
		
		link.parentElement.insertBefore(a, link);
		link.parentElement.removeChild(link);
	};
}


function buildSelect() {
	var e = getObjEntries(prices);

	e.forEach(function(e, t, n) {
		for (var key = 0; key < selectDistrict.length; key++) {
			var c = document.createElement("option");
			c.innerHTML = e[1][5],
			c.value = e[0],
			selectDistrict[key].appendChild(c)
		};
	}), trashTypes.forEach(function(e, t, n) {
		for (var key = 0; key < selectType.length; key++) {
			var c = document.createElement("option");
			c.innerHTML = e.name,
			c.value = e.k,
			selectType[key].appendChild(c)
		};
	}), trashVol.forEach(function(e, t, n) {
		for (var key = 0; key < selectVol.length; key++) {
			var c = document.createElement("option");
			c.innerHTML = e.name,
			c.value = e.id,
			selectVol[key].appendChild(c)
		};
	}), trashCount.forEach(function(e, t, n) {
		for (var key = 0; key < selectCount.length; key++) {
			var c = document.createElement("option");
			c.innerHTML = e.name,
			c.value = e.count,
			selectCount[key].appendChild(c)
		};
	})
}


function calculatePrice(index) {
	var e, t = selectType[index].value,
		n = selectVol[index].value,
		c = selectCount[index].value,
		o = prices[selectDistrict[index].value],
		i = [0, 0, 0, 0, 0];
	checkLoad[index].checked && (i = trashLoader),
	e = (o[n - 1] * t + i[n - 1]) * c,
	priceText[index].innerHTML = e,
	priceWrap[index].classList.add("js-show");

	var r = priceWrap[index].offsetHeight + priceWrap[index].offsetTop - document.documentElement.clientHeight + 32;
	window.scrollTo(0, r);
}

function showModal() {
	if(1 >= modalCounter) {
		var e = document.getElementById("zvptvtcsxszo"),
			t = document.getElementById("ajsohwzppqqaqa");
		e.classList.add("js-show"), modalCounter++, t.onclick = function() {
			e.classList.remove("js-show"), setTimeout(showModal, modalTime)
		}
	}
}

function addCardPrices() {
	
	var card = document.getElementById("qoreoleeuids"),
		cardVol = 1;

	if(card && card.dataset.cardVol) {
		cardVol = card.dataset.cardVol - 1;
	}
		
	if(card && card.dataset.cardId) {
		
		var cardsList = card.querySelector(".chjlsxalvdy"),
			cardPrice = prices[card.dataset.cardId][cardVol],
			counter = trashTypes.length;
		
		for (var key = 0; key <= counter; key++) {

			var cardRow = document.createElement("div"),
				cardName = document.createElement("div"),
				cardValue = document.createElement("div");
					
			cardRow.className = "chjlsxalvdy-row";
			cardName.className = "chjlsxalvdy__name";
			cardValue.className = "chjlsxalvdy__val";

			if(key === counter) {
				cardName.textContent = 'Грузчики';
				cardValue.textContent = trashLoader[cardVol] + " руб.";
			} else {
				cardName.textContent = trashTypes[key].name;
				cardValue.textContent = (cardPrice * trashTypes[key].k) + " руб.";
			}
			
			cardRow.appendChild(cardName);
			cardRow.appendChild(cardValue);
			cardsList.appendChild(cardRow);
		}
	}
}

function addCardAutopark() {
	var card = document.getElementById("dyoqsuwasztlp");
	if (!card) {
		console.log("Элемент в переменной card не найден.");
		return;
  }
		var cardVol = 1;

	if (card && card.dataset.cardVol) {
		 cardVol = card.dataset.cardVol - 1;
	}

	var cardsList = card.querySelector(".chjlsxalvdy"),
		 cardPrice = prices[card.dataset.cardId][cardVol],
		 counter = cards.autopark.length;

	for (var key = 0; key < counter; key++) {
		 var cardRow = document.createElement("div"),
			  cardName = document.createElement("div"),
			  cardValue = document.createElement("div");
					
		 cardRow.className = "chjlsxalvdy-row";
		 cardName.className = "chjlsxalvdy__name";
		 cardValue.className = "chjlsxalvdy__val";

		 cardName.textContent = cards.autopark[key].name;
		 cardValue.textContent = cards.autopark[key].values[cardVol];
		 
		 cardRow.appendChild(cardName);
		 cardRow.appendChild(cardValue);
		 cardsList.appendChild(cardRow);
	}
}



var modalCounter = 0,
	customLinks = document.querySelectorAll("customlink"),
	selectDistrict = document.getElementsByClassName("dpfxviwsewq"),
	selectType = document.getElementsByClassName("pluuyrulpcokvl"),
	selectVol = document.getElementsByClassName("tovpedhltjvjhu"),
	selectCount = document.getElementsByClassName("uxsgasfxaaq"),
	checkLoad = document.getElementsByClassName("scpoiaxovhc"),
	priceWrap = document.getElementsByClassName("zlsisowvwjqxo"),
	priceText = document.getElementsByClassName("fzodvawfhagywe");



! function() {
	buildLinks(),
	buildSelect(),
	addCardPrices(),
	addCardAutopark(),
	dxzvdqazol.onclick = function() {
		calculatePrice(0);
	},
	setTimeout(showModal, modalTime)
}();