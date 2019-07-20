//Change to up date article search variable based on html
// var queryURL = url + startDate + sDate + endDate + eDate + search + articlesearch + apiKey;
var apiKey = "EZAhwXGFlMNa2PfCAG2k0LQnwQZ77c9Y";
var search = "coffee";
var Yearstart = 1998;
// var endDate = YearEnd;
// var search = Search;
console.log(search);
var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  search +
  "&pub_year=" +
  Yearstart +
  "&api-key=" +
  apiKey;
// console.log(queryURL);
var queryURL = $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
// Search
// Record
// YearStart = pub_year
// YearEnd =
