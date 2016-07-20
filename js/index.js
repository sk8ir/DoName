$(document).ready(function(){
  var next = 2;
  $("#addWord").click(function(e){
    e.preventDefault();
    var addto = "#field" + next;
    next = next + 1;
    var newIn = '<input class="form-control" id="field" name="prof' + next + '" type="text"/>';
    var newInput = $(newIn);
    $(addto).after(newInput);
    $("#field" + next).attr('data-source',$(addto).attr('data-source'));
    $("#count").val(next);
  });

  $('#submit').click(function(e) {
    var arr = [];
    $('input[type="text"]').each(function (){
      arr.push($(this).val());
    })

    var domains = [{name: "name", price: "price", purchaseLink: "#"}];//domainSearch(arr);

    if (domains == null) {
      $('.no-results').css('display', 'block');
    } else {
      var addto = "#domain"

      domains.forEach(function(n) {
        var newRow = '<tr><td>' + n.name + '</td><td>' + n.price + '</td><td><a href="' + n.purchaseLink + '"><button class="btn btn-success btn-xs">Select</button></a></td></tr>';
        $(addto).append(newRow);
      })

      $('.results').css('display', 'block');
    }
  })
});