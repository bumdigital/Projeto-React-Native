import React from "react";
import { View } from "react-native";
import Button from "../components/Button";

import TextCenter from "../components/TextCenter";

const TelaB = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation} /> */}
      <div class="lojas pt-3 conatiner-fluid">
        <div class="endereco">
            <h3>São Paulo - SP</h3>
            <p>Avenida sabre de luz, 1000</p>
            <p>13 &ordm; andar</p>
            <p>Centro</p>
            <p>(11) 9999-9999</p>
        </div>

        <div class="endereco">
            <h3>Barueri - SP</h3>
            <p>Avenida Milenium Falcon, 300</p>
            <p>17 &ordm; andar</p>
            <p>Centro</p>
            <p>(11) 9999-9999</p>
        </div>

        <div class="endereco">
            <h3>Osasco - SP</h3>
            <p>Avenida Uma nova esperança, 500</p>
            <p>66 &ordm; andar</p>
            <p>Centro</p>
            <p>(11) 9999-9999</p>
        </div>
      </div>  
    </View>
  );
};

export default TelaB;
