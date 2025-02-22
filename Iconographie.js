// ================================================================================================================= //
//                                                                                                                   //
//                                                   Iconographie                                                    //
//                                                                                                                   //
// ================================================================================================================= //

// grec = {
// 	"Α": ["[a]", "[aː]"],
// 	"Β": ["[b]",
// 	"Γ": ["[ɡ]" /*devant α, ο, υ*/, "[ŋ]" /*devant γ, κ, ξ, χ*/],
// 	"Δ": ["[d]"],
// 	"Ε": ["[e]"],
// 	"Ζ": ["[dz]", "[zd]"],
// 	"Η": ["[ɛː]"],
// 	"Θ": ["[tʰ]"],
// 	"Ι": ["[i]", "[iː]"],
// 	"Κ": ["[k]", "kʰ"],
// 	"Λ": ["[l]"],
// 	"Μ": ["[m]"],
// 	"Ν": ["[n]"],
// 	"Ξ": ["[ks]"],
// 	"Ο": ["[o]"],
// 	"Π": ["[p]"],
// 	"Ρ": ["[r]"],
// 	"Σ": ["[s]"]
// 	"Τ": ["[t]"],
// 	"Υ": ["[y]", "[yː]"],
// 	"Φ": ["[pʰ]", "[ɸ]"],
// 	"Χ": ["[kʰ]"],
// 	"Ψ": ["[ps]"],
// 	"Ω": ["[ɔː]"],
// }

// latin = {
// 	"A": [""],
// 	"B": [""],
// 	"C": [""],
// 	"D": [""],
// 	"E": [""],
// 	"F": [""],
// 	"G": [""],
// 	"H": [""],
// 	"I": [""],
// 	"J": [""],
// 	"K": [""],
// 	"L": [""],
// 	"M": [""],
// 	"N": [""],
// 	"O": [""],
// 	"P": [""],
// 	"Q": [""],
// 	"R": [""],
// 	"S": [""],
// 	"T": [""],
// 	"U": [""],
// 	"V": [""],
// 	"W": [""],
// 	"X": [""],
// 	"Y": [""],
// 	"Z": [""],
// }

// cyrillique = {
// 	"А": [""],
// 	"Б": [""],
// 	"В": [""],
// 	"Г": [""],
// 	"Д": [""],
// 	"Е": [""],
// 	"Ж": [""],
// 	"З": [""],
// 	"И": [""],
// 	"І": [""],
// 	"К": [""],
// 	"Л": [""],
// 	"Μ": [""],
// 	"Н": [""],
// 	"О": [""],
// 	"П": [""],
// 	"Р": [""],
// 	"С": [""],
// 	"Т": [""],
// 	"У": [""],
// 	"Φ": [""],
// 	"Х": [""],
// 	"Ц": [""],
// 	"Ч": [""],
// 	"Ш": [""],
// 	"Щ": [""],
// 	"Ъ": [""],
// 	"Ь": [""],
// 	"Э": [""],
// 	"Я": [""],
// 	"Ѫ": [""],
// }

// arabe = {
// 	"ا": [""],
// 	"ٮ": [""],
// 	"ب": [""],
// 	"ة": [""],
// 	"ت": [""],
// 	"ث": [""],
// 	"ج": [""],
// 	"ح": [""],
// 	"خ": [""],
// 	"د": [""],
// 	"ذ": [""],
// 	"ر": [""],
// 	"ز": [""],
// 	"س": [""],
// 	"ش": [""],
// 	"ص": [""],
// 	"ض": [""],
// 	"ط": [""],
// 	"ظ": [""],
// 	"ع": [""],
// 	"غ": [""],
// 	"ڡ": [""],
// 	"ف": [""],
// 	"ٯ": [""],
// 	"ق": [""],
// 	"ك": [""],
// 	"ل": [""],
// 	"م": [""],
// 	"ن": [""],
// 	"ه": [""],
// 	"و": [""],
// 	"ي": [""],
// }

// syriaque = {
// 	"ܐ": [""],
// 	"ܒ": [""],
// 	"ܓ": [""],
// 	"ܔ": [""],
// 	"ܖ": [""],
// 	"ܕ": [""],
// 	"ܗ": [""],
// 	"ܘ": [""],
// 	"ܙ": [""],
// 	"ܚ": [""],
// 	"ܛ": [""],
// 	"ܜ": [""],
// 	"ܝ": [""],
// 	"ܟ": [""],
// 	"ܠ": [""],
// 	"ܡ": [""],
// 	"ܢ": [""],
// 	"ܣ": [""],
// 	"ܤ": [""],
// 	"ܥ": [""],
// 	"ܦ": [""],
// 	"ܨ": [""],
// 	"ܩ": [""],
// 	"ܪ": [""],
// 	"ܫ": [""],
// 	"ܬ": [""],
// }

function initialiser() {
	// for (lettre of Object.keys(grec)) {
		// for (indice = 0; indice < grec[lettre].length; indice++) {
			// console.log(indice);
		// }
	// }
	// Α = document.querySelector("img[alt = Α]");
	// Β = document.querySelector("img[alt = Β]");
	// sonAAA = document.getElementById(grec["Α"]);
	// Α.onmouseover = function() {sonAAA.play();};
	// Α.onmouseout = function() {sonAAA.pause();};
}

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
		nouvelleLigneLégende("Défaut", total - nombreDeClasses, total);
		for (classe in occurrences) {nouvelleLigneLégende(classe, occurrences[classe], total);}
		nouvelleLigneLégende("Total", total, total);
	}
);

function nouvelleLigneLégende(classe, occurrences, total) {
	pourcentage = (occurrences / total) * 100;
	ligne = tableLégende.insertRow();
	ligne.insertCell(0).outerHTML = "<td class = '" + classe + "'>" + classe + "</td>";
	ligne.insertCell(1).textContent = occurrences;
	ligne.insertCell(2).textContent = pourcentage.toFixed(1).replace(".", ",") + " %";
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Iconographie                                                    //
//                                                                                                                   //
// ================================================================================================================= //
