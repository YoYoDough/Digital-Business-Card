
const Links = () => {
  return (
    <div className = "linksContainer">
        <h2>Follow me by clicking these links below!</h2>

        <div>
            <div className = "linkedIn">
                <a href = "https://www.linkedin.com/in/yosuf-p/">
                    
                    <h3>LinkedIn</h3>
                </a>
            </div>

            <div className = "github">
                <a href = "https://github.com/YoYoDough">
                    <img></img>
                    <h3>Github</h3>
                </a>
            </div>

            <div className = "website">
                <a href = "import.meta.env.VITE_WEBSITE_URL"> {/*Bad Code, not correct*/}
                    <img></img>
                    <h3>My Website</h3>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Links