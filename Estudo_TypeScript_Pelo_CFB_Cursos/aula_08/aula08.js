"use strict";
var dias_Aula08;
(function (dias_Aula08) {
    dias_Aula08[dias_Aula08["domingo_Aula08"] = 0] = "domingo_Aula08";
    dias_Aula08[dias_Aula08["segunda_Aula08"] = 1] = "segunda_Aula08";
    dias_Aula08[dias_Aula08["ter\u00E7a_Aula08"] = 2] = "ter\u00E7a_Aula08";
    dias_Aula08[dias_Aula08["quarta_Aula08"] = 3] = "quarta_Aula08";
    dias_Aula08[dias_Aula08["quinta_Aula08"] = 4] = "quinta_Aula08";
    dias_Aula08[dias_Aula08["sexta_Aula08"] = 5] = "sexta_Aula08";
    dias_Aula08[dias_Aula08["s\u00E1bado_Aula08"] = 6] = "s\u00E1bado_Aula08";
})(dias_Aula08 || (dias_Aula08 = {}));
console.log(dias_Aula08.segunda_Aula08);
console.log(dias_Aula08["terça_Aula08"]);
console.log(dias_Aula08[4]);
console.log(dias_Aula08[new Date().getDay()]);
