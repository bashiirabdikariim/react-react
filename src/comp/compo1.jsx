import img from './received_954680921650885.jpeg'
function Compose() {
  return (
    <div>
      <div class="portifolio">
        <div class="title">
            <nav>
                <div class="navbar-brand"><span>D</span>esign <span>with B</span>ashiir</div>
                <div class="navbar-nav">
                    <ul>
                        <li><a href="">projects</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">contact me</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="main">
            <img class="profpict" src={img} alt="" width="100" height="100"/>
            <div class="info">
                <span class="leftcurs">
                    <div class="cusror1">◀</div>
                    <div class="cursor1txt">Webfolower developer</div>
                </span>
                <div class="target">
                    <h1>Hi, i'm Bashiir A Digital Designer</h1>
                </div> <span>
                    <div class="cusror2">◀</div>
                    <div class="cursortxt">Web Design</div>
                </span>
            </div>
            <div class="actions">
                <p>Transforming your Digital vision into Reality: innovative web Designs by a professional web Designer!
                </p>
                <button>START A Project</button>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Compose;
