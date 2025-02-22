// ================================================================================================================= //
//                                                                                                                   //
//                                                   Iconographie                                                    //
//                                                                                                                   //
// ================================================================================================================= //

document.addEventListener(
	"DOMContentLoaded",
	function () {
		éléments = document.querySelectorAll("table");
		total = éléments.length;
		occurrences = {};
		nombreDeClasses = 0;
		éléments.forEach(
			function (élément) {
				classe = élément.getAttribute("class");
				if (classe) {
					if (!occurrences[classe]) {occurrences[classe] = 1;} else {occurrences[classe]++;}
					nombreDeClasses++;
				}
			}
		);
		tableLégende = document.getElementById("table-légende");
		tableLégende.insertRow().insertCell(0).outerHTML = "<th>Classe</th><th>Occurrences</th><th>Proportion</th>";
		for (classe in occurrences) {nouvelleLigneLégende(classe, occurrences[classe], total);}
		nouvelleLigneLégende("table-Total", total, total);
	}
);

function nouvelleLigneLégende(classe, occurrences, total) {
	petiteClasse = classe.split("-")[1];
	pourcentage = (occurrences / total) * 100;
	ligne = tableLégende.insertRow();
	ligne.insertCell(0).outerHTML = "<th><table class = '" + classe + "'><td>" + petiteClasse + "</td></table><th>";
	ligne.insertCell(1).textContent = occurrences;
	ligne.insertCell(2).textContent = pourcentage.toFixed(1).replace(".", ",") + " %";
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Iconographie                                                    //
//                                                                                                                   //
// ================================================================================================================= //
