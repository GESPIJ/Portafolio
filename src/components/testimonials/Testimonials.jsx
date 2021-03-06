import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Jose Manuel Borelly",
      title: "CEO JF2 Soluciones Integrales",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Compromiso y entrega no solo para cumplir con los deadlines, sino que muestró interés genuino en los objetivos de la propia empresa",
    },
    {
      id: 2,
      name: "Carlos Rivero",
      title: "Gerente de Programación Intelcon",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Trabajar con personas como Greg te termina motivandome inevitablemente a dar lo mejor de ti y a buscar expandirte un poco más cada día a nivel profesional",
      featured: true,
    },
    {
      id: 3,
      name: "Daniel Rodriguez",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Excelente profesional, pero ante todo un gran ser humano que siempre esta dispuesto a escuchar y colaborar en lo que pueda con su equipo",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
