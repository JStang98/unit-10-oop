const inquirer = require("inquirer");
const {Circle, Svg, Text} = require("./shapes.js")

const questions = [{
  type: "list",
  name: "shapes",
  message: "choose a shape",
  choices: ["circle", "square", "triangle", "dodecahydron", "star", "4-point star", "rectangle", "trapazoid"]
}, {
  type: "input",
  name: "text",
  message: "What is the text you would like on your logo?"

},{
  type: "list",
  name: "color",
  message: "choose your color",
  choices: ["violet", "crimson", "canary yellow", "magenta", "beige", "aquamarine", "black", "white", "green"]
}, {
  type: "list",
  name: "textColor",
  message: "choose a text color",
  choices: ["black", "white", "crimson", "magenta"]
}



]

function promptUser(){
  inquirer.prompt(questions)
    .then( (response) => {
      switch(response.shape){
        case "circle":
          const circle = new Circle()
          circle.setColor(response.color)
          const text = new Text(response.text, response.textColor)
          const svg = new Svg(circle.render(), text.render())
          console.log(svg.render())
          break;
      }
    })

}
promptUser()