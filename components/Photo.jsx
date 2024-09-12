import myImage from '/myImage.jpg'

const Photo = () => {
  return (
    <div className = "photoContainer">
      <img src = {myImage} className = "img" alt = "yosuf.jpg"></img>
      <h1>Yosuf Pash</h1>
    </div>
  )
}

export default Photo