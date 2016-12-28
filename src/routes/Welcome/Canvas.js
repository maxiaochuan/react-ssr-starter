'use strict'

// let offsetWidth = process.env.BROWSER ? window.innerWidth : 0
// let offsetHeight = process.env.BROWSER ? window.innerHeight : 0
let offsetWidth = 1000
let offsetHeight = 600
const maxStar = 50
const maxDistance = Math.sqrt(offsetWidth * offsetWidth /4 + offsetHeight * offsetHeight /4)

const maxSpeed = 15
function random (min, max) {
  if (arguments.length < 2) {
    max = min
    min = 0
  }

  if (min > max) {
    let hold = max
    max = min
    min = hold
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}

class Stars {
  list = []
  constructor () {
    for (let i = 0; i < maxStar; i++) {
      this.list[i] = new Star()
    }
  }

  draw (ctx) {
    this.list.forEach(star => star.draw(ctx))
  }
}

class Star {
  constructor () {
    this.style = 0
    this.startx = this.x = random(offsetWidth)
    this.starty = this.y = random(offsetHeight)
    // 距离中点  x轴长度
    this.xAxisDistance = Math.abs(this.x - offsetWidth / 2)
    // 距离中点  y轴长度
    this.yAxisDistance = Math.abs(this.y - offsetHeight / 2)
    // 距离中点  直线
    this.distance = Math.sqrt(this.xAxisDistance * this.xAxisDistance +
      this.yAxisDistance * this.yAxisDistance)
    // 距离中点 比例
    this.scale = this.distance / maxDistance
    // 直线速度
    this.beginSpeed = random(2)
    this.speed = maxSpeed * this.scale + this.beginSpeed
    this.xspeed = this.speed * this.xAxisDistance / this.distance
    this.yspeed = this.speed * this.yAxisDistance / this.distance

    this.beginRadius = random(2)
    this.radius = this.scale * (4 - 1) + 1 + this.beginRadius
  }

  draw (ctx) {
    ctx.beginPath()
    // ctx.fillStyle = `rgba(255, 255, 255, ${this.style})`
    ctx.fillStyle = `rgba(255, 255, 255, 1)`
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    this.move()
  }

  move () {
    if (this.x < 0 || this.x > offsetWidth || this.y < 0 || this.y > offsetHeight) {
      this.beginSpeed = random(4)
      this.beginRadius = random(2)
      // this.x = random(offsetWidth / 4, offsetWidth / 4 * 3)
      // this.y = random(offsetHeight / 4, offsetHeight / 4 * 3)
      this.startx = this.x = random(offsetWidth)
      this.starty = this.y = random(offsetHeight)
    }
    this.x += this.x > offsetWidth / 2 ? this.xspeed : -this.xspeed
    this.y += this.y > offsetHeight / 2 ? this.yspeed : -this.yspeed
    // 距离中点  x轴长度
    this.xAxisDistance = Math.abs(this.x - offsetWidth / 2)
    // 距离中点  y轴长度
    this.yAxisDistance = Math.abs(this.y - offsetHeight / 2)
    // 距离中点  直线
    this.distance = Math.sqrt(this.xAxisDistance * this.xAxisDistance +
      this.yAxisDistance * this.yAxisDistance)
    // 距离中点 比例
    this.scale = this.distance / maxDistance

    this.style = this.scale * 3
    // 直线速度
    this.speed = maxSpeed * this.scale + this.beginSpeed
    this.xspeed = this.speed * this.xAxisDistance / this.distance
    this.yspeed = this.speed * this.yAxisDistance / this.distance

    this.radius = this.scale * (4 - 1) + 1 + this.beginRadius
  }
}

class Canvas {
  constructor (el) {
    this.el = el
    this.el.width = offsetWidth
    this.el.height = offsetHeight
    this.ctx = el.getContext('2d')
    this.stars = new Stars()
  }

  draw () {
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, offsetWidth, offsetHeight)
    this.stars.draw(this.ctx)
    this.stop = window.requestAnimationFrame(this.draw.bind(this))
  }
}

export default Canvas
