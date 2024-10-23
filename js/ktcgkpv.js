var formatButton = document.createElement("button")
formatButton.innerHTML = "Định dạng trang in"
formatButton.addEventListener("click", formatPage)
formatButton.style = "position: absolute; top: 1pt; left: 50%; transform: translateX(-50%); z-index: 99;"
formatButton.className = "btn btn-sm btn-primary"
document.getElementById("readingContainer").appendChild(formatButton)

function formatPage() {
	console.log("formatPage()")

	// Variables
	var fontFamily = "UTM Times"
	var fontSize = 12
	var lineHeight = 1.25

	// Process page title
	var title = document.querySelector(".daily-title.center-block").innerText.replaceAll(" - ", " – ")
	var dayTitle = document.querySelector(".day-title").innerText.replaceAll(" - ", " – ")
	document.title = title ? title : dayTitle ? dayTitle : "Bài đọc KTCGKPV"
	document.querySelector(".daily-title.center-block").innerText = title
	document.querySelector(".day-title").innerText = dayTitle
	document.querySelector("#massReadingContent").style.opacity = 1

	// Set page content
	document.body.innerHTML = document.querySelector("#readingContainer").innerHTML
	document.documentElement.contentEditable = true

	// Remove unnecessary elements
	var classesToRemove = [
		".main-title.center-block",
		".day-rank",
		".introit.reading.division",
		".epitomize",
		".responsory.division",
		".division.gospel-acclam",
		".communion.reading.division",
		".btn.btn-sm.btn-primary",
		".btn.dropdown-toggle > i"
	]
	document.querySelectorAll(classesToRemove.join(", ")).forEach(item => item.remove())

	// Styling page
	var style = document.createElement("style")
	document.head.appendChild(style)
	style.textContent = `
	* {
		font-family: '${fontFamily}';
		background: none;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: ${fontSize}pt;
		line-height: ${lineHeight};
		background: #fff;
		color: #000;
		overflow: auto;
	}
	p {
		margin: 0 0 0 4pt;
		line-height: ${lineHeight};
	}
	#massReadingContent {
		opacity: 1;
		padding: 1.5cm;
	}
	#dateInfo .daily-title,
	#dateInfo .day-title {
		text-transform: uppercase;
	}
	#massReadingContent .division .header-indexing {
		padding-top: 8pt;
	}
	.holycross {
		padding-right: 4pt;
	}
	@media screen {
		body {
			background: #ddd;
		}
		#massReadingContent {
			max-width: 21cm;
			min-height: 29.7cm;
			margin: 0pt auto;
			background: #fff;
		}
		.dropdown-toggle {
			padding-right: 0;
		}
	}
	@media print {
		*,
		.holycross,
		#massReadingContent .sel-transparent .btn {
			color: #000!important;
		}
		#massReadingContent {
			opacity: 1;
			padding: 0;
		}
	}`
}
