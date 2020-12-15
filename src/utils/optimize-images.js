const sharp = require(`sharp`)
const glob = require(`glob`)
const fs = require(`fs-extra`)
const argv = require('minimist')(process.argv.slice(2))
// const prettyBytes = require('pretty-bytes')

if (!argv.f) {
  return console.log(`Please specify the image folder (-f folder/subfolder) to optimize.`)
}

const matches = glob.sync(`${argv.f}/**/**/*.{png,jpg,jpeg}`, { nocase: true })
const MAX_WIDTH = argv.w ? argv.w : 1600
const MAX_HEIGHT = argv.h ? argv.h : 1600
const QUALITY = argv.q ? argv.q : 70
const FORMAT = argv.e ? argv.e : 'jpg'

console.log(`${matches.length} images found... (png|jpg|jpeg)`)
console.log('QUALITY: ', QUALITY)
console.log('FORMAT: ', FORMAT)

if (argv.w && argv.h) {
  return console.log('Error, only set either -h <max_height> or -w <max_width> not both')
} else if (!argv.w && argv.h) {
  console.log('MAX_HEIGHT: ', MAX_HEIGHT)
  Promise.all(
    matches.map(async (match) => {
      const stream = sharp(match)
      const info = await stream.metadata()
      if (info.height < MAX_HEIGHT) {
        return console.log(`${match} ${info.height}px > ${info.height}px`)
      }
      const optimizedName = match.replace(/(\..+)$/, (match, ext) => `-optimized${ext}`)
      if (FORMAT === 'png') {
        await stream.resize(null, MAX_HEIGHT).png({ quality: QUALITY }).toFile(optimizedName)
      } else {
        await stream.resize(null, MAX_HEIGHT).jpeg({ quality: QUALITY }).toFile(optimizedName)
      }
      console.log(`${match} ${info.height}px > ${info.height}px`)
      return fs.rename(optimizedName, match)
    })
  )
} else {
  console.log('MAX_WIDTH: ', MAX_WIDTH)
  Promise.all(
    matches.map(async (match) => {
      const stream = sharp(match)
      const info = await stream.metadata()
      if (info.width < MAX_WIDTH) {
        return console.log(`${match} ${info.width}px > ${info.width}px`)
      }
      const optimizedName = match.replace(/(\..+)$/, (match, ext) => `-optimized${ext}`)
      if (FORMAT === 'png') {
        await stream.resize(null, MAX_WIDTH).png({ quality: QUALITY }).toFile(optimizedName)
      } else {
        await stream.resize(null, MAX_WIDTH).jpeg({ quality: QUALITY }).toFile(optimizedName)
      }
      console.log(`${match} ${info.width}px > ${info.width}px`)
      return fs.rename(optimizedName, match)
    })
  )
}
