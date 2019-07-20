//Change to up date article search variable based on html
// var queryURL = url + startDate + sDate + endDate + eDate + search + articlesearch + apiKey;
var apiKey = "EZAhwXGFlMNa2PfCAG2k0LQnwQZ77c9Y";
var search = "";
var yearstart = "";
var queryURL = "";
// var endDate = YearEnd;
// var search = Search;
console.log(search);

$("#submit").on("click",function(e) {
  e.preventDefault()

  search = $("#search").val().trim();
  yearstart = $("#yearstart").val().trim();

  queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    search +
    "&pub_year=" +
    yearstart +
    "&api-key=" +
    apiKey;

  console.log(queryURL)

  // console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(queryURL);
  });
})


// Searchi
// Record
// YearStart = pub_year
// YearEnd =
