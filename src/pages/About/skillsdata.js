import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact, SiReactrouter ,SiNodedotjs, SiMongodb, SiGithub, SiVisualstudiocode, SiNetlify, SiPostman, SiTailwindcss } from "react-icons/si";

class Skills {
  constructor(name, icon) {
      this.name = name;
      this.icon = icon;
  }
}

const react = new Skills("React", SiReact);
const reactrouter = new Skills("React Router", SiReactrouter);
const html5 = new Skills("HTML5", SiHtml5);
const css3 = new Skills("CSS3", SiCss3);
const javascript = new Skills("Javascript", SiJavascript);
const bootstrap = new Skills("Bootstrap", SiBootstrap);
const nodejs = new Skills("Node.js", SiNodedotjs);
const mongodb = new Skills("MongoDB", SiMongodb);
const github = new Skills("Github", SiGithub);
const visualstudiocode = new Skills("Visual Studio Code", SiVisualstudiocode);
const netlify = new Skills("Netlify", SiNetlify);
const postman = new Skills("Postman", SiPostman);
const tailwindcss = new Skills("Tailwind CSS", SiTailwindcss);

export const skills = [html5, css3, javascript, react, reactrouter, bootstrap, nodejs, mongodb];

export const tools = [github, visualstudiocode, netlify, postman, tailwindcss]