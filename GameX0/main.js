var clickNumber = 0;
var player = 1;
  function Counter() {
    document.getElementsByClassName("gamecontainer")[0].addEventListener("click", function (event) {
      console.log(event.target.nodeName);
      if (event.target.nodeName.toLowerCase() =='button') {
        if (!event.target.innerText) {
          clickNumber++;

          if (clickNumber % 2 == 0) {
            player = 1;
            event.target.innerText = "XX";
          } else {
            player = 2;
            event.target.innerText = "O";
          }

          b = document.getElementsByTagName('button');
          if (b[0].innerText != "" && b[0].innerText == b[1].innerText && b[1].innerText == b[2].innerText) {
            alert("Winner")
          }

          document.getElementById('player').innerText = 'Player ' + player;

        }
      }
        })


    }
  Counter();
