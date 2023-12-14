// require inquirer 
// import shapes into index

class Shape {
  constructor(){
    this.color = ""
  }
  setColor(userColor){
    this.color = userColor
  }

}


class Text {
  constructor(text, textColor){
    this.text = text
    this.textColor = textColor
  }
  render(){
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill=“${this.textColor}”>${this.text}</text>`
  }
}

class Svg {
  constructor(shapeEl, textEl){
    this.shapeEl = shapeEl
    this.textEl = textEl
  }
  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
  }
}



class Circle extends Shape {
  render(){
    return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`
  }
}

class Square extends Shape {
  render(){
    return `<square cx="50" cy="50" r="50" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  render(){
    return `<triangle cx="50" cy="50" r="50" fill="${this.color}" />`
  }
}

class Dodecahydron extends Shape {
  render(){
    return `<dodecahydron cx="50" cy="50" r="50" fill="${this.color}" />`
  }
}

class Star extends Shape {
  render(){
    return `<star cx="50" cy="50" r="50" fill="${this.color}" />`
  }
}

class Rectangle extends Shape {
  render(){
    return `<rectangle cx="50" cy="50" r="50" fill="${this.color}" />`
  }
}

module.exports = {Circle, Text, Svg}
module.exports = {Square, Text, Svg}
module.exports = {Triangle, Text, Svg}
module.exports = {Dodecahydron, Text, Svg}
module.exports = {Star, Text, Svg}
module.exports = {Rectangle, Text, Svg}