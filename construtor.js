
class Topico {
    constructor(cod, nome, arquivo){
        this.cod = cod;
        this.nome = nome;
        this.arquivo = arquivo;
        this.visitado = false;
    }
}

class Aula {
    constructor(titulo, topicos){
        this.titulo = titulo;
        this.topicos = topicos;
    }
}

let conteudos = null;

if (localStorage.getItem("conteudos") == null){

    // OS TÓPICOS DEVEM ESTAR NA ORDEM DA JORNADA.
    conteudos = {
        0: new Aula("Introdução", [
            new Topico(0, "Conceito", "introducao/0-0.html"), 
            new Topico(1, "Database", "introducao/0-1.html"), 
            new Topico(2, "Collections", "introducao/0-2.html"), 
            new Topico(3, "Documentos", "introducao/0-3.html"),
        ]),
        1: new Aula("Insert", [
            new Topico(0, "InsertOne()", "insert/1-0.html"), 
            new Topico(1, "InsertMany()", "insert/1-1.html"),
            new Topico(2, "Exercicios", "insert/1-2.html")
        ]),
        2: new Aula("Find", [
            new Topico(0, "Find()", "find/2-0.html"), 
            new Topico(1, "Op. de Comparação", "find/2-1.html"), 
            new Topico(2, "Op. Lógicos", "find/2-2.html"),
            new Topico(3, "Op. de Elementos", "find/2-3.html"),
            new Topico(4, "Op. de Avaliação", "find/2-4.html"),
            new Topico(5, "Op. de Matrizes", "find/2-5.html"),
            new Topico(6, "Exercicios", "find/2-6.html")
        ]),
        3: new Aula("Update", [
            new Topico(0, "UpdateOne()", "update/3-0.html"), 
            new Topico(1, "UpdateMany()", "update/3-1.html"), 
            new Topico(2, "Exercicios", "update/3-2.html")
        ]),
        4: new Aula("Delete", [
            new Topico(0, "DeleteOne()", "delete/4-0.html"), 
            new Topico(1, "DeleteMany()", "delete/4-1.html"), 
            new Topico(2, "Exercicios", "delete/4-2.html")
        ])
    };
    localStorage.setItem("conteudos", JSON.stringify(conteudos));
} else { conteudos = JSON.parse(localStorage.getItem("conteudos")); }


// Construindo conteudo.
const body = document.getElementsByTagName("body")[0];
const main = document.createElement("main");
main.id = "main";

const conteudoAtual = document.getElementsByTagName("div")[0];
conteudoAtual.remove();

const idAula = parseInt(conteudoAtual.id.split("-")[0]);
const idTopico = parseInt(conteudoAtual.id.split("-")[1]);
const aulaAtual = conteudos[idAula];
let topicoAtual, topicoAnterior, proximoTopico = null;

if (aulaAtual != null) 
{
    aulaAtual.topicos[idTopico].visitado = true;
    localStorage.setItem("conteudos", JSON.stringify(conteudos));
    topicoAtual = aulaAtual.topicos[idTopico];
    [ topicoAnterior, proximoTopico ] = pegarTopicos();
}

main.appendChild(construirMenu());
main.appendChild(construirConteudo());

body.appendChild(construirHeader());
body.appendChild(main);

// Adicionando favicon, links css e titulo no head.
let favicon = document.createElement("link");
favicon.rel = "shortcut icon";
favicon.href = "../../images/icon.svg";
favicon.type = "image/x-icon";


["styles", "header", "menu", "content"].forEach(arquivoCss => {
    let cssLink = document.createElement("link");

    cssLink.rel="stylesheet";
    cssLink.href=`../../css/${arquivoCss}.css`;
    document.head.appendChild(cssLink);
});

document.head.appendChild(favicon);

console.log(topicoAtual)

let title = document.createElement("title");
if (aulaAtual != null) title.innerText = `Mr. Mongo - ${topicoAtual.nome}`;
else title.innerText = "Mr. Mongo";

document.head.appendChild(title);

// Adicionando Função de Copiar Exemplo de Código.
codigos = document.getElementsByClassName("codigo");

for (let i = 0; i < codigos.length; i++)
{   
    codigos[i].addEventListener("mouseenter", () => {
        if (codigos[i].getElementsByTagName("input").length != 0) return;
        
        let botaoCopiar = document.createElement("img");
        botaoCopiar.className = "copiar";
        botaoCopiar.src = "../../images/copiar.png";
        botaoCopiar.alt = "Copiar";


        botaoCopiar.addEventListener("click", () => {
            navigator.clipboard.writeText(codigos[i].innerText);
  
            const balao = document.createElement('div');
            balao.textContent = 'Copiado!';
            balao.classList.add('balaoEscondido');
            document.body.appendChild(balao);

            // Posicionar o balão próximo ao botão
            const botaoPosicao = botaoCopiar.getBoundingClientRect();
            balao.style.top = botaoPosicao.bottom + 'px';
            balao.style.left = botaoPosicao.left + 'px';

            // Mostrar o balão
            balao.style.display = 'block';


            setTimeout(() => {
                balao.style.display = 'none';
                // Remover o balão do DOM após ocultá-lo
                document.body.removeChild(balao);
              }, 1000); 
 
        });
        

        codigos[i].appendChild(botaoCopiar);
    });

    codigos[i].addEventListener("mouseleave", () => {
        if (codigos[i].getElementsByTagName("input").length != 0) return;
        if (codigos[i].getElementsByClassName("copiar").length != 0)
            codigos[i].getElementsByClassName("copiar")[0].remove(); 

    });

}

// Funções Construtoras de Conteúdo HTML

function pegarTopicos() {
    let anterior, proximo;

    anterior = aulaAtual.topicos[topicoAtual.cod - 1];
    proximo = aulaAtual.topicos[topicoAtual.cod + 1];

    if (anterior == null && idAula != 0) anterior = conteudos[idAula - 1].topicos.at(-1);
    if (proximo == null && idAula != Object.keys(conteudos).length - 1) proximo = conteudos[idAula + 1].topicos.at(0);

    return [ anterior, proximo ];
}

function construirHeader(){
    const header = document.createElement("header");
    header.id = "header";

    const logoA = document.createElement("a");
    const logo = document.createElement("img");
    logo.src = "../../images/mrmongo.svg";
    logo.alt = "Logo do MrMongo";
    logo.id = "logo";

    logoA.href = "../home/index.html"

    logoA.appendChild(logo);
    header.appendChild(logoA);

    return header;
}

function construirMenu() {
    const menu = document.createElement("div");
    menu.id = "menu";
    const aulas = document.createElement("ul")
    aulas.id = "aulas";

    let conteudoIndex = 0;
    for (let conteudo in conteudos) {

        let aula = document.createElement("li");
        aula.className = "aula";

        let aulaNome = document.createElement("div");
        aulaNome.className = "aula-nome";

        let seta = document.createElement("div");
        seta.className = "seta-icon";

        let aulaN = document.createElement("p");
        aulaN.textContent = conteudos[conteudo].titulo;

        aulaNome.append(seta, aulaN);

        let aulaTopicos = document.createElement("ul");
        aulaTopicos.className = "aula-topico";

        if (conteudos[conteudo] == aulaAtual) { 
            aulaTopicos.classList.add("visivel"); 
            seta.classList.add("seta-aberta");
        }

        conteudos[conteudo].topicos.forEach(topicoNome => {
            let topicoLi = document.createElement("li");
            let topico = document.createElement("a");

            topico.textContent = topicoNome.nome;
            topico.href = "../" + topicoNome.arquivo;
            topico.className = "topico-link";

            if (conteudos[conteudo] == aulaAtual && topicoNome.cod == topicoAtual.cod) {
                topico.classList.add("topico-atual")
            }

            topicoLi.appendChild(topico);
            aulaTopicos.appendChild(topicoLi);
        
            if (!topicoNome.visitado) {
                let aviso = document.createElement("div");
                aviso.className = "aviso";
                topicoLi.appendChild(aviso);
            }
        });

        aulaNome.addEventListener("click", () => {
            aulaTopicos.classList.toggle("visivel");
            seta.classList.toggle("seta-aberta");
        });

        aula.append(aulaNome, aulaTopicos);
        aulas.appendChild(aula);

        conteudoIndex++;
    }

    menu.appendChild(aulas);
    return menu;
}

function construirConteudo() {
    const content = document.createElement("div");
    content.id = "content";
    
    const abrirMenu = document.createElement("div");
    abrirMenu.id = "abrirMenu";

    abrirMenu.addEventListener("click", () => {
        document.getElementById("menu").classList.add("aberto");
    });

    content.addEventListener("click", (e) => {
        if (!document.getElementById("menu").classList.contains('aberto')) return;
        if (!abrirMenu.isEqualNode(e.target)) document.getElementById("menu").classList.remove("aberto");
    });

    const areaInfoCarregamento = document.createElement("div");
    areaInfoCarregamento.id = "area-info-carregamento";
    
    const barraCarregamento = document.createElement("div");
    barraCarregamento.id = "barra-carregamento";

    const carregamento = document.createElement("div");
    carregamento.id = "carregamento";

    let qtdTopicos = 0, qtdTopicosVisitados = 0;
    for (let conteudo in conteudos){
        let topicos = conteudos[conteudo].topicos;

        topicos.forEach((topico) => {
            if (topico.visitado) qtdTopicosVisitados++;
            qtdTopicos++;
        })
    }
    
    let progresso = parseInt((qtdTopicosVisitados / qtdTopicos) * 100) + "%"; 

    carregamento.style.width = progresso;
    barraCarregamento.appendChild(carregamento);

    const porcCarregamento = document.createElement("div");
    porcCarregamento.id = "porc-carregamento";
    porcCarregamento.textContent =  progresso;

    areaInfoCarregamento.appendChild(barraCarregamento);
    areaInfoCarregamento.appendChild(porcCarregamento);

    content.appendChild(areaInfoCarregamento);

    Array.from(conteudoAtual.children).forEach(elemento =>
    {
        content.appendChild(elemento);
    });

    let nav = document.createElement("div");
    nav.id = "nav";

    let anterior = document.createElement("a");
    if (topicoAnterior != null) {
        anterior.id = "anterior";
        anterior.textContent = "Anterior";
        anterior.href = "../" + topicoAnterior.arquivo;        
    }

    let proximo = document.createElement("a");
    if (proximoTopico != null) {
        proximo.id = "proximo";
        proximo.textContent = "Próximo";
        proximo.href = "../" + proximoTopico.arquivo;
    }

    nav.appendChild(anterior);
    nav.appendChild(proximo);

    content.append(abrirMenu);
    content.appendChild(nav);

    return content;
}

// Funções para Exercicios

function exercicioComplemento(idInputExercicio, regexResultado, resultadoFormatado) {

    function removerEspacos (str) {

        let result = '';
        let inQuotes = false;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '"') {
                inQuotes = !inQuotes;
            }
            
            if (!inQuotes && str[i] === ' ') {
                continue; 
            }

            result += str[i];
        }

        return result;
        
    }

    const inputExercicio = document.getElementById(idInputExercicio); 

    inputExercicio.addEventListener("keyup", (event) => {

        let resposta = removerEspacos(inputExercicio.value);

        if (event.key == "Enter") {
            if (!regexResultado.test(resposta)) {
                inputExercicio.classList.add("errado");
            } else {
                inputExercicio.classList.remove("errado");
                const novoElemento = document.createElement("span");

                novoElemento.innerHTML = resultadoFormatado;

                inputExercicio.parentNode.replaceChild(novoElemento, inputExercicio);
            }
        } else {
            inputExercicio.classList.remove("errado");
        }
    })
} 



