function addFirst(){
  var li = document.createElement('li');
  li.setAttribute("class", "column");
  li.innerHTML = document.getElementsByClassName("column")[0].innerHTML;
  document.getElementById("first").appendChild(li);
}

function addSecond(){
  var li = document.createElement('li');
  li.setAttribute("class", "column");
  li.innerHTML = document.getElementById("second_column").innerHTML;
  document.getElementById("second").appendChild(li);
}
function refresh(){
  let choice = Math.floor(Math.random() * 2)
  if (choice == 0){
    let randpoem = fake_poems[Math.floor(Math.random() * fake_poems.length)]
    document.getElementById("poemhouse").innerHTML = randpoem
    document.getElementById("robot").setAttribute("onclick", "success()")
    document.getElementById("pen").setAttribute("onclick", "failure()")
  }
  else {
    let randpoem = real_poems[Math.floor(Math.random() * real_poems.length)]
    document.getElementById("poemhouse").innerHTML = randpoem
    document.getElementById("pen").setAttribute("onclick", "success()")
    document.getElementById("robot").setAttribute("onclick", "failure()")
  }
}

function success(){
  let current_score = parseInt(document.getElementById("human_score").innerHTML);
  current_score++;
  if (current_score == 4){
    let tbc = new Audio("sounds/tbc.mov");
    tbc.play();
    document.getElementById("pen").setAttribute("onclick", "")
    document.getElementById("robot").setAttribute("onclick", "")
    setTimeout(() => {
      document.getElementById("poemhouse").outerHTML = '<div class="ending"> Humans win!</div>';
      document.getElementById("human_score").innerHTML = `${current_score}`;
      confetti.start();
      setTimeout(() => {
        confetti.stop();
      }, 2000);
    }, 3600);
  }
  else {
    let audio = new Audio("sounds/hmm.mp3");
    audio.play();
    document.getElementById("human_score").innerHTML = `${current_score}`;

    confetti.start();
    setTimeout(() => {
      confetti.stop()
      refresh();
    }, 1000);
  }
}
function failure(){
  let current_score = parseInt(document.getElementById("robot_score").innerHTML);
  if (current_score == 4){
    let ghoul = new Audio("sounds/ghoul.mov");
    ghoul.play();
    document.getElementById("pen").setAttribute("onclick", "")
    document.getElementById("robot").setAttribute("onclick", "")
    setTimeout(() => {
      document.getElementById("robot_score").innerHTML = `${current_score+1}`;
      document.getElementById("poemhouse").outerHTML = '<div class="ending"> Robot wins!</div>';
      document.getElementById("canvas").setAttribute("style", "background-color:#ca4445");
      return
    }, 5000);
  }
  else {
    let audio = new Audio("sounds/oof.mp3");
    audio.play();
    current_score++;
    document.getElementById("robot_score").innerHTML = `${current_score}`;
    document.getElementById("canvas").setAttribute("style", "background-color:#ca4445");
    setTimeout(() => {
      document.getElementById("canvas").setAttribute("style", "background-color:#ab8aff");
      refresh();
    }, 1000);
  }
}
