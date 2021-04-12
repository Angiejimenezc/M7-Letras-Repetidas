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
