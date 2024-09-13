
const Links = () => {
  return (
    <div className = "linksContainer">
        <h2>Follow me by clicking these links below!</h2>

        <div className = "links">
            <button className = "linkedIn" onClick={() => window.location.href = 'https://www.linkedin.com/in/yosuf-p/'}>
                <i className="fa fa-linkedin-square" ></i>
                <h3>LinkedIn</h3>
            </button>

            <button className = "github" onClick={() => window.location.href = 'https://github.com/YoYoDough'}>
                    <i className="fa fa-github"></i>
                    <h3>Github</h3>
            </button>

            <button className = "website" onClick={() => window.location.href = import.meta.env.VITE_WEBSITE_URL}>
                    <i className="fa-solid fa-globe"></i>
                    <h3>My Website</h3>
            </button>
        </div>
    </div>
  )
}

export default Links