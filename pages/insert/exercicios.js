// Exercicio 01
exercicioComplemento("ex1.1.0", /^insertOne$/, 'insertOne')
exercicioComplemento("ex1.1.1", /^"Franco Pristaldo"$/, "<span class=\"bson_str\">\"Franco Pristaldo\"</span>")

// Exercicio 02
exercicioComplemento("ex1.2.0", /^insertMany$/, 'insertMany')
exercicioComplemento("ex1.2.1", /^"Lucas Pitanga"$/, "<span class=\"bson_str\">\"Lucas Pitanga\"</span>")
exercicioComplemento("ex1.2.2", /^36$/, "<span class=\"bson_num\">36</span>")

// Exercicio 03
exercicioComplemento("ex1.3.0", /^{nome:"Enner Falencia",idade:34,time:"Nacional"}$/, 
"{ <span class=\"bson_campo\">nome</span>: <span class=\"bson_str\">\"Enner Falencia\"</span>, " +
"<span class=\"bson_campo\">idade</span>: <span class=\"bson_num\">34</span>, " + 
"<span class=\"bson_campo\">time</span>: <span class=\"bson_str\">\"Nacional\"</span> }")

// Exercicio 04
exercicioComplemento("ex1.4.0", /^estatisticas:{gols:9,assistencias:5}$/, 
"<span class=\"bson_campo\">estatisticas</span>: " + 
"{ <span class=\"bson_campo\">gols</span>: <span class=\"bson_num\">9</span>, <span class=\"bson_campo\">assistencias</span>: <span class=\"bson_num\">5</span>}");

