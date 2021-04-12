// Ejercicio 1

function Ejercicio1() {
  let mi_nombre = ["A", "N", "G", "E", "L", "I", "C", "A"];
  for (let i = 0; i < mi_nombre.length; i++) {
    console.log(mi_nombre[i]);
  }
}

// Ejercicio 2

function Ejercicio2() {
  let mi_nombre = ["A", "N", "G", "E", "L", "8", "C", "A", "M", "4", "R", "1"];

  console.log("A partir del nombre 'ANGEL8CAM4R1'");

  for (var i = 0; i < mi_nombre.length; i++) {
    if (
      mi_nombre[i] == "A" ||
      mi_nombre[i] == "E" ||
      mi_nombre[i] == "I" ||
      mi_nombre[i] == "O" ||
      mi_nombre[i] == "U"
    ) {
      console.log(`He encontrado la Vocal ${mi_nombre[i]}`);
    } else if (!isNaN(mi_nombre[i])) {
      console.log(
        `Los nombres de personas no contienen el número: ${mi_nombre[i]}`
      );
    } else console.log(`He encontrado la Consonante:  ${mi_nombre[i]}`);
  }
}

function Ejercicio3() {
  let mi_nombre = ["A", "N", "G", "E", "L", "I", "C", "A"];

  nameMap = new Map();
  for (var i = 0; i < mi_nombre.length; i++) {
    let number = nameMap.get(mi_nombre[i]);
    if (number) {
      nameMap.set(mi_nombre[i], number + 1);
    } else {
      nameMap.set(mi_nombre[i], 1);
    }
  }
  console.log(nameMap);
}

// Ejercicio 4

function Ejercicio4() {
  let mi_nombre = "Angélica Jiménez Carrillo";
  console.log(Array.from(mi_nombre));
}

// Ejercicio 5 nivel 2

function extraerEmail() {
  var str =
    "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio ( nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES ). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

  var expr = /[a-z.-]+@[a-z\ñ.-]+\.[a-z]{2,3}/gi;
  var dupli = str.match(expr);
  var noDupli = [];

  dupli.forEach(function (el, index) {
    var resultado = dupli[(el, index)];

    if (noDupli.indexOf(resultado) < 0) {
      noDupli.push(resultado);
      console.log(resultado);
    }
  });
}
