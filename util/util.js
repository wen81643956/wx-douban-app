function getColor() {
  let color = ['#FF4055', '#4F9DED', '#FFC46C', '#2384E8', '#42BD56', '#CC3344', '#FFAC2D', '#3BA94D'];
  return color[parseInt(Math.random() * 8, 10)];
}

module.exports = {
  getColor: getColor
}