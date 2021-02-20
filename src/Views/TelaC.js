import React from "react";
import { View, Text } from "react-native";

import TextCenter from "../components/TextCenter";

const TelaB = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation} /> */}

      
      <form method="post" action className="px-5 py-2">
        <label htmlFor="nome">Nome</label><br />
        <input type="text" name="nome" id="nome" /><br />
        <label htmlFor="endereco">Endereço</label><br />
        <input type="text" name="endereco" id="endereco" /><br />
        <label htmlFor="telefone">Telefone</label><br />
        <input type="text" name="telefone" id="telefone" /><br />
        <label htmlFor="nome_produto">Nome do Produto</label><br />
        <input type="text" name="nome_produto" id="nome_produto" /><br />
        <label htmlFor="vUnit">Valor Unitário</label><br />
        <input type="text" name="vUnit" id="vUnit" /><br />
        <label htmlFor="qtd">Quantidade</label><br />
        <input type="text" name="qtd" id="qtd" /><br />
        <label htmlFor="vTot">Valor total</label><br />
        <input type="text" name="vTot" id="vTot" /><br />
        <button type="submit" name="cadastrar">Cadastrar</button>
      </form>


    </View>
  );
};

export default TelaB;
