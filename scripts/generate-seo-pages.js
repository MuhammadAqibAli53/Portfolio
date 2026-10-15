const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const root = path.resolve(__dirname, "..");
const build = path.join(root, "build");
const site = "https://muhammad-aqib-ali.vercel.app";
const base = fs.readFileSync(path.join(build, "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "src/components/Projects/Projects.js"), "utf8");
const ast = parser.parse(js, {sourceType:"module",plugins:["jsx"]});
const exportNode = ast.program.body.find(node => node.type === "ExportNamedDeclaration" && node.declaration && node.declaration.declarations && node.declaration.declarations.some(d => d.id.name === "PROJECTS"));
if (!exportNode) throw new Error("Cannot find PROJECTS export");
const array = exportNode.declaration.declarations.find(d => d.id.name === "PROJECTS").init;
if (array.type !== "ArrayExpression") throw new Error("Expected static PROJECTS array");
const value = (node,key) => {
 const prop = node.properties.find(p => p.key && (p.key.name === key || p.key.value === key));
 return prop && prop.value && typeof prop.value.value === "string" ? prop.value.value : "";
};
const projects = array.elements.map(node=>({title:value(node,"title"),slug:value(node,"slug"),description:value(node,"description"),image:value(node,"imgPath")}));
if(projects.length!==25 || new Set(projects.map(p=>p.slug)).size!==25 || projects.some(p=>!p.title||!p.slug||!p.description)) throw new Error("Project catalog validation failed");
const escape = v => String(v).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const pages = [
 {route:"/",out:"home",title:"Muhammad Aqib Ali | Software Developer & AI Projects",description:"Explore Muhammad Aqib Ali's software development portfolio, including AI prototypes, machine learning experiments, and web applications."},
 {route:"/project",out:"project",title:"Software & AI Projects | Muhammad Aqib Ali",description:"Explore 25 documented software, applied AI, automation, and research projects by Muhammad Aqib Ali."},
 {route:"/about",out:"about",title:"About Muhammad Aqib Ali | Software Development",description:"Learn about Muhammad Aqib Ali's software development background, technical interests, and project experience."},
 {route:"/resume",out:"resume",title:"Resume | Muhammad Aqib Ali",description:"View Muhammad Aqib Ali's resume, professional experience, and technical background."},
 {route:"/contact",out:"contact",title:"Contact Muhammad Aqib Ali | Software Projects",description:"Get in touch with Muhammad Aqib Ali about software development projects, AI prototypes, or collaboration opportunities."},
 ...projects.map(p=>({route:"/project/"+p.slug,out:"projects/"+p.slug,title:p.title+" | Muhammad Aqib Ali",description:p.description,image:p.image}))
];
function setMeta(html,attribute,name,content) {
 const escapedName = name.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&");
 const matcher = new RegExp('<meta\\s+'+attribute+'="'+escapedName+'"[^>]*>','i');
 const tag = '<meta '+attribute+'="'+name+'" content="'+escape(content)+'">';
 return matcher.test(html) ? html.replace(matcher,tag) : html.replace("</head>",tag+"\n</head>");
}
pages.forEach(p=>{
 let html=base;
 const url=site+p.route;
 const image=p.image?site+p.image:site+"/favicon.png";
 html=html.replace(/<title>[\s\S]*?<\/title>/i,"<title>"+escape(p.title)+"</title>");
 html=html.replace(/<link\s+rel="canonical"[^>]*>/ig,"");
 html=html.replace("</head>",'<link rel="canonical" href="'+escape(url)+'">\n</head>');
 const metas=[
 ["name","description",p.description],["name","robots","index,follow,max-image-preview:large"],
 ["property","og:title",p.title],["property","og:description",p.description],
 ["property","og:url",url],["property","og:type",p.image?"article":"website"],
 ["property","og:image",image],["property","og:image:alt",p.image?"Illustrative concept cover for "+p.title:"Muhammad Aqib Ali portfolio icon"],
 ["name","twitter:title",p.title],["name","twitter:description",p.description],
 ["name","twitter:image",image]
 ];
 metas.forEach(([attr,key,content])=>{html=setMeta(html,attr,key,content);});
 const dest=path.join(build,"seo",p.out+".html");
 fs.mkdirSync(path.dirname(dest),{recursive:true});
 fs.writeFileSync(dest,html);
});
console.log("Generated static metadata for "+pages.length+" routes");
