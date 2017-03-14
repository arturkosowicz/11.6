var urlCountry = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var topicList = $('#topic');
var infoList = $('#info');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();

	if (!countryName.length) {
		countryName = 'Poland';
	}

	$.ajax({
		url: urlCountry + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	// countriesList.empty();
	topicList.empty();
	infoList.empty();
	resp.forEach(function(item) {

		$('<li>').text('Kraj: ').appendTo(topicList);
		$('<li>').text(item.name).appendTo(infoList);

		$('<li>').text('Język: ').appendTo(topicList);
		$('<li>').text(item.languages).appendTo(infoList);

		$('<li>').text('Stolica: ').appendTo(topicList);
		$('<li>').text(item.capital).appendTo(infoList);

		$('<li>').text('Waluta: ').appendTo(topicList);
		$('<li>').text(item.currencies).appendTo(infoList);

		$('<li>').text('Powierzchnia: ').appendTo(topicList);
		$('<li>').html(item.area + ' km<sup>2</sup>').appendTo(infoList);

		$('<li>').text('Region: ').appendTo(topicList);
		$('<li>').text(item.region).appendTo(infoList);

		$('<li>').text('Strefa czasowa: ').appendTo(topicList);
		$('<li>').text(item.timezones).appendTo(infoList);

		$('<li>').html('Państwa sąsiadujące: ').appendTo(topicList);

		var borders = $('<li>').text(item.borders).appendTo(infoList);

		$('<li>').text('***').appendTo('#topic');
		$('<li>').text('***').appendTo('#info');

		// if (item.borders == '') {
		// 	borders += $('<span>').html('Brak danych').appendTo('#info');
		// }

		// $('<li>').html('<span>Kraj: </span> ' + item.name).appendTo(countriesList);
		// $('<li>').html('<span>Język: </span>' + item.languages).appendTo(countriesList);
		// $('<li>').html('<span>Stolica: </span>' + item.capital).appendTo(countriesList);
		// $('<li>').text('Waluta: ' + item.currencies).appendTo(countriesList);
		// $('<li>').html('Powierzchnia: ' + item.area + ' km<sup>2</sup>').appendTo(countriesList);
		// $('<li>').text('Region: ' + item.region).appendTo(countriesList);
		// $('<li>').text('Strefa czasowa: ' + item.timezones).appendTo(countriesList);
		// $('<li>').text('Państwa sąsiadujące: ' + item.borders).appendTo(countriesList);
	});
}