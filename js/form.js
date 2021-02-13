class Form{
    constructor(){

    }
display(){
  var input=createInput("name")
  var button =createButton("play")
  var greeting =createElement("h3")
  input.position(130,150)
  button.position(250,250)
  button.mousePressed(function(){
    input.hide()
    button.hide()
    var name=input.value()
    playercount+=1
  player.updatecount(playercount)
    player.update(name)
    greeting.html("hello "+name)
  })
}
}
  







































