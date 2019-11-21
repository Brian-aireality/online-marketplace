$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var phoneInput = $("input#phone").val();
    var addressInput = $("input#address").val();
    var productInput = $("input#product").val();
    var shippingInput = $("input#shipping").val();

    $(".name").text(nameInput);
    $(".phone").text(phoneInput);
    $(".address").text(addressInput);
    $(".product").text(productInput);
    $(".shipping").text(shippingInput);

    $("#story").show();
    event.preventDefault();

    $(".thankyou").show();
  });
});
