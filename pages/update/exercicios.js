// Exercicio 01
exercicioComplemento("ex3.1.0", /^updateOne$/, 'updateOne')
exercicioComplemento("ex3.1.1", /^"João"$/, "<span class=\"bson_str\">\"João\"</span>")
exercicioComplemento("ex3.1.2", /^"3B"$/, "<span class=\"bson_str\">\"3B\"</span>")

// Exercicio 02
exercicioComplemento("ex3.2.0", /^updateOne$/, 'updateOne')
exercicioComplemento("ex3.2.1", /^id$/, "<span class=\"bson_campo\">id</span>")
exercicioComplemento("ex3.2.2", /^1$/, "<span class=\"bson_num\">1</span>")
exercicioComplemento("ex3.2.3", /^\$push$/, "<span class=\"bson_op\">\$push</span>")
exercicioComplemento("ex3.2.4", /^notas$/, "<span class=\"bson_campo\">notas</span>")
exercicioComplemento("ex3.2.5", /^9.0$/, "<span class=\"bson_num\">9.0</span>")

// Exercicio 03
exercicioComplemento("ex3.3.0", /^updateMany$/, 'updateMany')
exercicioComplemento("ex3.3.1", /^"3A"$/, "<span class=\"bson_str\">\"3A\"</span>")
exercicioComplemento("ex3.3.2", /^"Rio de Janeiro"$/, "<span class=\"bson_str\">\"Rio de Janeiro\"</span>")

// Exercicio 04
exercicioComplemento("ex3.4.0", /^updateMany$/, 'updateMany')
exercicioComplemento("ex3.4.1", /^{}$/, "{}")
exercicioComplemento("ex3.4.2", /^\$inc$/, "<span class=\"bson_op\">\$inc</span>")
exercicioComplemento("ex3.4.3", /^idade$/, "<span class=\"bson_campo\">idade</span>")
exercicioComplemento("ex3.4.4", /^1$/, "<span class=\"bson_num\">1</span>")
