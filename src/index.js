import paper, { view, Path, Group, Point, Size, Rectangle } from 'paper'

// Get a reference to the canvas object
const canvas = document.getElementById('myCanvas')
// Create an empty project and a view for the canvas:
paper.setup(canvas)
// Create a Paper.js Path to draw a line into it:
const path = new paper.Path()
// Give the stroke a color
path.strokeColor = 'black'
const pointOne = new paper.Point(100, 20)
const pointTwo = new paper.Point(0, 100)
const pointThree = new paper.Point(300, 30)
path.moveTo(pointOne)
path.lineTo(pointOne.add(-10, -10))
path.lineTo(pointTwo)
path.lineTo(pointThree)
path.closed = true
path.selected = true
paper.view.draw()

const svgObject = paper.project.exportSVG()
document.getElementById('mydiv').appendChild(svgObject)

document.getElementById('download-to-svg').onclick = () => {
	const fileName = 'custom.svg'
	const url = `data:image/svg+xml;utf8,${encodeURIComponent(
		paper.project.exportSVG({ asString: true })
	)}`
	const link = document.createElement('a')
	link.download = fileName
	link.href = url
	link.click()
}
