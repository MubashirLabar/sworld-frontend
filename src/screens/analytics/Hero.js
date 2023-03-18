import {
  ArrowRightIcon,
  ClockIcon2,
  GlobalIcon,
  MessageIcon2,
  SendIcon,
  UsersIcon,
} from "assets/icons";

const statics = [
  {
    label: "90+ Milioni",
    text: "Utenti unici annuali",
    icon: <UsersIcon />,
  },
  {
    label: "120+ Paesi",
    text: "Visitatori da tutto il mondo",
    icon: <GlobalIcon />,
  },
  {
    label: "75+ Mila",
    text: "Storie video pubblicati e disponibili.",
    icon: <MessageIcon2 />,
  },
  {
    label: "12+ Mila",
    text: "Click su i nostri blog.",
    icon: <SendIcon />,
  },
];

function Hero() {
  return (
    <div
      className="analytics_hero-section"
      style={{ backgroundImage: `url(/images/analytics-hero-bg.webp)` }}
    >
      <div className="wrapper app-width">
        <div className="ls">
          <div className="title">Fai crescere il tuo business con Sworld</div>
          <div className="text">Crea i tuoi annunci in pochi minuti</div>
          <button className="start-btn">
            Registrati <ArrowRightIcon />
          </button>
        </div>
        <div className="rs">
          <div className="block">
            <div className="title">Classifica globale Alexa</div>
            <div className="stamp">
              <ClockIcon2 />
              18 Febbraio 2023
            </div>
            <div className="text">
              Il sistema di classificazione dei siti web leader nel mondo
            </div>
            <div className="item">
              <div className="label">Sworld.co.uk</div>
              <div className="graph-blk">
                <img src="/images/graph-1.png" alt="img" className="graph" />
                <div className="value">439</div>
              </div>
            </div>
            <div className="item">
              <div className="label">nationalgeographic.com</div>
              <div className="graph-blk">
                <img src="/images/graph-2.png" alt="img" className="graph" />
                <div className="value">5146</div>
              </div>
            </div>
            <div className="item">
              <div className="label">lonelyplanet.com</div>
              <div className="graph-blk">
                <img src="/images/graph-2.png" alt="img" className="graph" />
                <div className="value">11776</div>
              </div>
            </div>
            <div className="item">
              <div className="label">trivago.com</div>
              <div className="graph-blk">
                <img src="/images/graph-1.png" alt="img" className="graph" />
                <div className="value">12157</div>
              </div>
            </div>
            <div className="item">
              <div className="label">Kayak.it</div>
              <div className="graph-blk">
                <img src="/images/graph-1.png" alt="img" className="graph" />
                <div className="value">8490</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="analytics-statics app-width">
        <div className="block">
          {statics.map((item, index) => (
            <div className="item" key={index}>
              {item.icon}
              <div className="tit">{item.label}</div>
              <div className="txt">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
