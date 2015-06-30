
$(document).ready(function() {
  var money = 100;
  var updateMoney = function() {
    $('#current-amount').text(money);
  };
      
      updateMoney();


        $('#bet-form').on('submit', function() {
          var betAmount = +($('#bet').val());
          console.log(typeof(betAmount))
          money -= betAmount;
          updateMoney();
          var guess = $('#guess').val();
          
          var value = Math.floor((Math.random() * 10) + 1);
          alert("The value is " + value + "!");

          if (guess === value) {
            money = money * 2;
            updateMoney();
            console.log("I'm in the if statement where u guess right", guess, money)
            alert("Grats! You now have $" + money);
          }
          else if (guess == value + 1 || guess ==  value -1) {
            money += betAmount;
            console.log(typeof(guess), typeof(money));
            console.log("ELSE IF", guess, money)

            updateMoney();
          }
          

          if (money <= 0) {
            alert("You're out of money and owe the sharks now! GAME OVER");
            return;
          }
        
        });
      
      $('#reset').on('click', function() {
        money = 100;
        updateMoney();
      });
  
});

