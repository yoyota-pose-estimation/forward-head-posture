import React from "react"
import PoseNet from "@react-posenet/time"
import LocalStorageInput from "./components/LocalStorageInput"
import { writeDistance } from "./util"

const width = 600
const height = 500

const modelConfig = {
  architecture: "ResNet50",
  outputStride: 16,
  inputResolution: { width, height },
  quantBytes: 4
}

function getKeypointsObject(pose) {
  return pose.keypoints.reduce((acc, { part, position, score }) => {
    const lPart = part.toLowerCase()
    const { x, y } = position
    acc[`${lPart}_x`] = x / width
    acc[`${lPart}_y`] = y / height
    acc[`${lPart}_score`] = score
    return acc
  }, {})
}

function onEstimate(poses, date) {
  if (poses.length !== 1) return
  const [pose] = poses
  const keypoints = getKeypointsObject(pose)

  writeDistance(keypoints, date)
}

function App() {
  return (
    <>
      <LocalStorageInput label="InfluxDB URL" />
      <PoseNet
        className="vh-100"
        frameRate={1}
        modelConfig={modelConfig}
        onEstimate={onEstimate}
        width={width}
        height={height}
      />
    </>
  )
}

export default App
