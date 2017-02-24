$(document).ready(function() {
  var arrTable = []
  var totalNoTax = 0;
  var totalTax = 0;
  var totalTotal = 0;
  var clickCount = 0;
  var finalRow = ["ORDER TOTAL", totalNoTax, totalTax, totalTotal]
  $('.buttonsBurger').on('click', function() {
    console.log("You clicked a buttonsBurger!");
    arrTable.push(["Tiny Clay Hamburger", "$79.99", "$2.32", "$82.31"]);
    finalRow[1] += 79.990
    finalRow[2] += 2.32
    finalRow[3] += 82.31
    for (var i = 0; i < arrTable.length; i++) {
      console.log(arrTable[i]);
    }
    console.log(finalRow);
    clickCount++;
    // console.log($('#tableBody'));
    $('#tableBody').append("<tr><td><strong>Tiny Clay Hamburger</strong></td><td>$79.99</td><td>$2.32</td><td><strong>$82.31</strong></td></tr>");
    var $tableRow = $("<tr></tr>")
    $tableRow.html("<td></td>")
    $('#total').text(`$${finalRow[3]}`)
  })
  $('.buttonsSandwich').on('click', function() {
    console.log("You clicked a buttonsSandwich!");
    arrTable.push(["Insulation in Cardboard", "-$5","", "-$5"]);
    finalRow[1] -= 5
    finalRow[3] -= 5
    for (var i = 0; i < arrTable.length; i++) {
      console.log(arrTable[i]);
    }
    console.log(finalRow);
    clickCount++;
    $('#tableBody').append("<tr><td><strong>Insulation in Cardboard</strong></td><td>-$5</td><td></td><td><strong>-$5</strong></td></tr>");
    var $tableRow = $("<tr></tr>")
    $tableRow.html("<td></td>")
    $('#total').text(`$${finalRow[3]}`)
  })
  $('.buttonsPizza').on('click', function() {
    console.log("You clicked a buttonsPizza!");
    arrTable.push(["Salad on Bread", "$8.99", "$0.26", "$9.25"]);
    finalRow[1] += 8.990
    finalRow[2] += 0.26
    finalRow[3] += 9.25
    for (var i = 0; i < arrTable.length; i++) {
      console.log(arrTable[i]);
    }
    console.log(finalRow);
    clickCount++;
    $('#tableBody').append("<tr><td><strong>Salad on Bread</strong></td><td>$8.99</td><td>$0.26</td><td><strong>$9.25</strong></td></tr>");
    var $tableRow = $("<tr></tr>")
    $tableRow.html("<td></td>")
    $('#total').text(`$${finalRow[3]}`)
  })
  $('.buttonsRibs').on('click', function() {
    console.log("You clicked a buttonsRibs!");
    arrTable.push(["#PROTEIN", "$14.99", "$0.43", "$15.42"]);
    finalRow[1] += 14.990
    finalRow[2] += 0.43
    finalRow[3] += 15.42
    for (var i = 0; i < arrTable.length; i++) {
      console.log(arrTable[i]);
    }
    console.log(finalRow);
    clickCount++;
    $('#tableBody').append("<tr><td><strong>#PROTEIN</strong></td><td>$14.99</td><td>$0.43</td><td><strong>$15.42</strong></td></tr>");
    var $tableRow = $("<tr></tr>")
    $tableRow.html("<td></td>")
    $('#total').text(`$${finalRow[3]}`)
  })

})
