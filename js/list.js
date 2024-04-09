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


function cropText(e) {
	var t = function() {
		return window.innerWidth <= 360 ? 94 : window.innerWidth <= 375 ? 100 : window.innerWidth <= 394 ? 104 : window.innerWidth <= 414 ? 116 : window.innerWidth <= 768 ? 238 : 390
	}();
	if(e.innerHTML.length > t) {
		var n = document.createElement("div"),
			c = document.createElement("span");
		c.innerText = " дальше", c.classList.add("seo__readmore"), c.addEventListener("click", function() {
			n.style.display = "none", o.style.display = "block"
		}), n.innerHTML = e.innerHTML.slice(0, t - 3) + "... ", n.appendChild(c);
		var o = document.createElement("div");
		o.style.display = "none";
		var i = document.createElement("span");
		i.innerText = "свернуть", i.classList.add("seo__readmore"), i.addEventListener("click", function() {
			n.style.display = "block", o.style.display = "none"
		}), o.innerHTML = e.innerHTML + " ", o.appendChild(i), e.innerHTML = "", e.appendChild(n), e.appendChild(o)
	}
}


function addGarbageTypes() {
	
	var htmlArr = pgryyccvhydqx.querySelectorAll(".tcsfqlgetlocac");

	for (var key = 0; key < htmlArr.length; key++) {
		var htmlTitle = htmlArr[key].querySelector(".zujxofskaddc"),
			htmlList = htmlArr[key].querySelector(".ugowiyvjuo"),
			arrList = garbageTypes[key].text;

		htmlTitle.innerHTML = garbageTypes[key].name;

		for (var i = 0; i < arrList.length; i++) {
			var item = document.createElement("li");

			item.innerHTML = arrList[i];
			htmlList.appendChild(item);
		};
	};
}


function addQuestions() {
	var htmlArr = oeiszqpeoflrl.querySelectorAll(".qrwsogjeitygef");

	for (var key = 0; key < htmlArr.length; key++) {
		var htmlTitle = htmlArr[key].querySelector(".dviipokvfki"),
			htmlText = htmlArr[key].querySelector(".urhougejpkg");

		htmlTitle.innerHTML = questions[key].question;
		htmlText.innerHTML = questions[key].answer;
	}
}


function addAdvantages(el, arr) {
	var wrap = document.getElementById(el),
		htmlArr = wrap.querySelectorAll(".awfaruptcaecaoj");

	for (var key = 0; key < htmlArr.length; key++) {
		var htmlTitle = htmlArr[key].querySelector(".whckiwyxlte"),
			htmlText = htmlArr[key].querySelector(".asvpicwysji");

		htmlTitle.innerHTML = arr[key].name;
		htmlText.innerHTML = arr[key].text;
	}
}



function addTablePrices() {
	
	var table = document.getElementById("icdpvhxqexyie");
		
	if(table && table.dataset.tableId) {
		
		var tableHeaderTitle = table.querySelectorAll(".retdxecxxecal"),
			tableRowHeaderTitle = table.querySelectorAll(".igszhyrqcfkhwil"),
			tableRowValueTitle = table.querySelectorAll(".zkzhauphihfofr"),
			tableRowDesc = table.querySelectorAll(".ipkqripvkrw"),
			tablePrice = prices[table.dataset.tableId];

		for (var key = 0; key < tableHeaderTitle.length; key++) {

			if(key != (tableHeaderTitle.length - 1)) {
				tableHeaderTitle[key].textContent = "Контейнер " + tables.prices.headerTitle[key];
			} else {
				tableHeaderTitle[key].textContent = tables.prices.headerTitle[key];	
			}
			
		}

		for (var key = 0; key < tableRowHeaderTitle.length; key++) {
			tableRowHeaderTitle[key].querySelector("td").textContent = tables.cellTitle[key];
		}


		for (var key = 0; key < tableRowValueTitle.length; key++) {
			var td = tableRowValueTitle[key].querySelectorAll("td");

			for (var i = 0; i < td.length; i++) {
				
				td[i].dataset.header = tables.cellTitle[key];
				
				if(i == td.length - 1) {
					td[i].textContent = (tablePrice[i + 1] * trashTypes[key].k) + " руб.";
				} else {
					td[i].textContent = (tablePrice[i] * trashTypes[key].k) + " руб.";
				}
			}
		}

		for (var key = 0; key < tableRowDesc.length; key++) {
			var td = tableRowDesc[key].querySelectorAll("td");

			for (var i = 0; i < td.length; i++) {
				td[i].textContent = tables.prices.headerTitle[i];
			}
		}
	}
}



function addTableSpecs() {
	
	var table = document.getElementById("exkaawtfqwkstxa");
		
	if(table) {
		
		var tableHeaderTitle = table.querySelectorAll(".retdxecxxecal"),
			tableRowHeaderTitle = table.querySelectorAll(".igszhyrqcfkhwil"),
			tableRowValueTitle = table.querySelectorAll(".zkzhauphihfofr"),
			tableRowDesc = table.querySelectorAll(".ipkqripvkrw");

		for (var key = 0; key < tableHeaderTitle.length; key++) {
			if(key != (tableHeaderTitle.length - 1)) {
				tableHeaderTitle[key].textContent = "Контейнер " + tables.prices.headerTitle[key];
			} else {
				tableHeaderTitle[key].textContent = tables.prices.headerTitle[key];	
			}
		}

		for (var key = 0; key < tableRowHeaderTitle.length; key++) {
			tableRowHeaderTitle[key].querySelector("td").textContent = tables.specs.specsdata[key].name;
		}

		for (var key = 0; key < tableRowValueTitle.length; key++) {
			var td = tableRowValueTitle[key].querySelectorAll("td");

			for (var i = 0; i < td.length; i++) {
				td[i].dataset.header = tables.specs.specsdata[key].name;
				td[i].textContent = tables.specs.specsdata[key].values[i];
			}
		}

		for (var key = 0; key < tableRowDesc.length; key++) {
			var td = tableRowDesc[key].querySelectorAll("td");

			for (var i = 0; i < td.length; i++) {
				td[i].textContent = tables.prices.headerTitle[i];
			}
		}
	}
}


function addTableAutopark() {
	
	var table = document.getElementById("xdtegkojoxei");
		
	if(table && table.dataset.tableId) {
		
		var tableItem = table.querySelectorAll(".frcvychropuhip");

		for (var key = 0; key < tableItem.length; key++) {

			var tablePriceHtml = tableItem[key].querySelector(".dlvfgwlduerwkjg"),
				tablePrice = prices[table.dataset.tableId];

			if(key != (tableItem.length - 1)) {
				tablePriceHtml.textContent = tablePrice[key] + " руб.";
			} else {
				tablePriceHtml.textContent = tablePrice[key + 1] + " руб.";
			}
			


			for (var i = 0; i < tables.autopark.length; i++) {

				var tableList = tableItem[key].querySelector(".chjlsxalvdy"),
					row = document.createElement("div"),
					cellName = document.createElement("div"),
					cellValue = document.createElement("div");
				
				row.className = "chjlsxalvdy-row";
				cellName.className = "chjlsxalvdy__name";
				cellValue.className = "chjlsxalvdy__val";

				cellName.textContent = tables.autopark[i].name;
				cellValue.textContent = tables.autopark[i].values[key];

				row.appendChild(cellName);
				row.appendChild(cellValue);
				tableList.appendChild(row);
			}
		}
	}
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


function playVideo(player, el) {
	player.onclick = function() {
		player.classList.toggle("js-active");
		
		if(player.classList.contains("js-active")) {
			el.setAttribute("controls", "controls");
			el.play();
		} else {
			el.removeAttribute("controls", "controls");
			el.pause();
		}
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
	dxzvdqazol.onclick = function() {
		calculatePrice(0);
	},
	lavasafslt.onclick = function() {
		calculatePrice(1);
	},
	cropText(fgawurwlcsx),
	cropText(fgawurwlcsx2),
	addGarbageTypes(),
	addQuestions(),
	addAdvantages("ohfhzqezfuzjwa", scheme1),
	addAdvantages("zzwreezafs", scheme2),
	addTablePrices(),
	addTableSpecs(),
	addTableAutopark(),
	playVideo(hssogthgudztdd, gkoyafyqppy),
	setTimeout(showModal, modalTime)
}();