let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda " + info.personagem)

  info['recorrente'] = "sim";

  console.log(info);

  for (key in info) {
      console.log(key + "\n");
        
  }

  for (key in info) {
      console.log(info[key]);
  }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim'  
  };

  console.log(info.personagem + " e " + info2.personagem );
  console.log(info.origem + " e " + info2.origem);
  if (info.recorrente == "sim" && info2.recorrente == "sim"){
      console.log("ambos recorrentes");
  }