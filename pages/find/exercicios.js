// Exercicio 01
exercicioComplemento("ex2.1.0", /^find$/, 'find')
exercicioComplemento("ex2.1.1", /^nome:"Ketchup"$/, "<span class=\"bson_campo\">nome</span>: <span class=\"bson_str\">\"Ketchup\"</span>")

// Exercicio 02
exercicioComplemento("ex2.2.0", /^find$/, 'find')
exercicioComplemento("ex2.2.1", /^categoria:{\$ne:"Limpeza"}$/, "<span class=\"bson_campo\">categoria</span>: { <span class=\"bson_op\">$ne</span>: <span class=\"bson_str\">\"Limpeza\"</span> }")

// Exercicio 03
exercicioComplemento("ex2.3.0", /^find$/, 'find')
exercicioComplemento("ex2.3.1", /^preco:{\$gt:20}$/, "<span class=\"bson_campo\">preco</span>: { <span class=\"bson_op\">$gt</span>: <span class=\"bson_num\">20</span> }")

// Exercicio 04
exercicioComplemento("ex2.4.0", /^find$/, 'find')
exercicioComplemento("ex2.4.1", /^preco:{\$lte:30}$/, "<span class=\"bson_campo\">preco</span>: { <span class=\"bson_op\">$lte</span>: <span class=\"bson_num\">30</span> }")

//<!-- Operadores Lógicos -->
// Exercicio 05
exercicioComplemento("ex2.5.0", /^find$/, 'find')
exercicioComplemento("ex2.5.1", /^dta_validade$/, "<span class=\"bson_campo\">dta_validade</span>")
exercicioComplemento("ex2.5.2", /^\$gte:"01\/01\/2024"$/, "<span class=\"bson_op\">$gte</span>:<span class=\"bson_str\">\"01/01/2024\"</span>")
exercicioComplemento("ex2.5.3", /^\$lte:"31\/12\/2024"$/, "<span class=\"bson_op\">$lte</span>:<span class=\"bson_str\">\"31/12/2024\"</span>")

// Exercicio 06
exercicioComplemento("ex2.6.0", /^find$/, 'find')
exercicioComplemento("ex2.6.1", /^categoria$/, "<span class=\"bson_campo\">categoria</span>")
exercicioComplemento("ex2.6.2", /^\$in:\["Alimento Industrializado","Alimento Fresco"\]$/, "<span class=\"bson_op\">$in</span>:<span class=\"bson_str\">\[\"Alimento Industrializado\",\"Alimento Fresco\"\]</span>")

// Exercicio 07
exercicioComplemento("ex2.7.0", /^find$/, 'find')
exercicioComplemento("ex2.7.1", /^preco$/, "<span class=\"bson_campo\">preco</span>")
exercicioComplemento("ex2.7.2", /^\$not:{\$gt:14.90}$/, "<span class=\"bson_op\">$not</span>:{<span class=\"bson_op\">$gt</span>:<span class=\"bson_num\">14.90</span>}")

//<!-- Operadores Elementos -->
// Exercicio 08
exercicioComplemento("ex2.8.0", /^find$/, 'find')
exercicioComplemento("ex2.8.1", /^dta_validade$/, "<span class=\"bson_campo\">dta_validade</span>")
exercicioComplemento("ex2.8.2", /^\$exists:true$/, "<span class=\"bson_op\">$exists</span>:<span class=\"bson_bool\">true</span>")

// Exercicio 9
exercicioComplemento("ex2.9.0", /^typeof$/, '<span class="bson_campo">typeof</span>')
exercicioComplemento("ex2.9.1", /^find$/, 'find')
exercicioComplemento("ex2.9.2", /^dta_validade$/, "<span class=\"bson_campo\">dta_validade</span>")
exercicioComplemento("ex2.9.3", /^\$exists:true$/, "<span class=\"bson_op\">$exists</span>:<span class=\"bson_bool\">true</span>")
exercicioComplemento("ex2.9.4", /^.dta_validade$/, ".<span class=\"bson_campo\">dta_validade</span>")

// Exercicio 10
exercicioComplemento("ex2.10.0", /^find$/, 'find')
exercicioComplemento("ex2.10.1", /^\$expr$/, "<span class=\"bson_op\">$expr</span>")
exercicioComplemento("ex2.10.2", /^\$lt:\["\$estoque","\$preco"\]$/, "<span class=\"bson_op\">$lt</span>: [<span class=\"bson_str\">\"$estoque\",\"$preco\"</span>]")
  
