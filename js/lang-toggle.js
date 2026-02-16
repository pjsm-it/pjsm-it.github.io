export function initLangToggle() {
  const langBtn = document.getElementById("langBtn");
  let currentLang = "en";

  const translations = {
    "Home": "Início",
    "About": "Sobre Mim",
    "Projects": "Projetos",
    "Skills": "Habilidades",
    "Contact Me": "Contato",
    "Junior Web Developer": "Desenvolvedor Web Júnior",
    "Building clean, professional web solutions with a focus on performance, SEO, and maintainable code.":
      "Construindo soluções web limpas e profissionais, com foco em performance, SEO e código sustentável.",
    "About Me": "Sobre Mim",
    "I develop high-quality web solutions with attention to performance, UX, and best practices. I have hands-on experience in HTML5, CSS3, JavaScript, and Angular for building responsive and interactive web applications. My background also includes database management with SQL Server and NoSQL, and object-oriented programming in C# .NET. I have completed workshops in Agile Methodologies, UX Essentials, and professional development, and contributed to multiple practical projects, continuously improving my technical skills.":
      "Desenvolvo soluções web de alta qualidade, com atenção à performance, UX e boas práticas. Tenho experiência prática em HTML5, CSS3, JavaScript e Angular para construir aplicações web responsivas e interativas. Meu background também inclui gerenciamento de bancos de dados com SQL Server e NoSQL, e programação orientada a objetos em C# .NET. Concluí workshops em Metodologias Ágeis, UX Essentials e desenvolvimento profissional, e contribuo em múltiplos projetos práticos, aprimorando continuamente minhas habilidades técnicas.",
    "Simple task manager built with HTML, CSS, JS.": "Gerenciador de tarefas simples feito com HTML, CSS e JS.",
    "Tech: HTML5, CSS3, JavaScript (ES6+)": "Tecnologias: HTML5, CSS3, JavaScript (ES6+)",
    "Angular app using OpenWeather API.": "Aplicativo Angular usando API OpenWeather.",
    "Tech: Angular, TypeScript, REST API": "Tecnologias: Angular, TypeScript, REST API",
    "Full-stack project demonstrating database operations.": "Projeto Full-stack demonstrando operações em banco de dados.",
    "Frontend": "Frontend",
    "Backend / Databases": "Backend / Bancos de Dados",
    "Tools / Version Control": "Ferramentas / Controle de Versão",
    "Soft Skills / Professional Development": "Habilidades Comportamentais / Desenvolvimento Profissional",
    "Languages": "Idiomas",
    "Portuguese (Native)": "Português (Nativo)",
    "English (Fluent)": "Inglês (Fluente)",
    "Braga, Portugal": "Braga, Portugal"
  };

  function toggleLanguage() {
    const allTextElements = document.querySelectorAll("[data-en]");

    allTextElements.forEach(el => {
      const enText = el.getAttribute("data-en");
      const ptText = translations[enText] || enText;

      el.textContent = currentLang === "en" ? ptText : enText;
    });

    const icon = langBtn.querySelector("img");
    if (currentLang === "en") {
      icon.src = "assets/icons/world.png";
      icon.alt = "Português";
      currentLang = "pt";
    } else {
      icon.src = "assets/icons/united-states-2.png";
      icon.alt = "English";
      currentLang = "en";
    }
  }

  langBtn.addEventListener("click", toggleLanguage);
}
