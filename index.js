const inquirer = require("inquirer");
const {Circle, Svg, Text, Triangle, Square, Star, Dodecahydron, Rectangle} = require("./shapes.js")
const fs = require("fs")

const questions = [{
  type: "list",
  name: "shapes",
  message: "choose a shape",
  choices: ["circle", "square", "triangle", "dodecahydron", "star", "rectangle", "trapazoid"]
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

//add other shapes
function promptUser(){
  inquirer.prompt(questions)
    .then( (response) => {
      let SVG;
      let text;
      switch(response.shapes){
        case "circle":
          const circle = new Circle()
          circle.setColor(response.color)
          text = new Text(response.text, response.textColor)
          SVG = new Svg(circle.render(), text.render())
          break;
        case "triangle":
          const triangle = new Triangle()
          triangle.setColor(response.color)
          text = new Text(response.text, response.textColor)
          SVG = new Svg(triangle.render(), text.render())
          break;
        case "square":
          const square = new Square()
          square.setColor(response.color)
          text = new Text(response.text, response.textColor)
          SVG = new Svg(triangle.render(), text.render())
          break;
          case "star":
            const star = new Star()
            star.setColor(response.color)
            text = new Text(response.text, response.textColor)
            SVG = new Svg(star.render(), text.render())
            break;
            case "dodecahydron":
              const dodecahydron = new Dodecahydron()
              square.setColor(response.color)
              text = new Text(response.text, response.textColor)
              SVG = new Svg(dodecahydron.render(), text.render())
              break;
              case "star":
            const rectangle = new Rectangle()
            star.setColor(response.color)
            text = new Text(response.text, response.textColor)
            SVG = new Svg(resctangle.render(), text.render())
            break;
        
      }
      fs.writeFileSync("logo.svg", SVG.render())
    })

}
promptUser()

