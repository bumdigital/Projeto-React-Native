import React from "react";
import { View } from "react-native";
import TextCenter from "../components/TextCenter";


import Button from '../components/Button'

const TelaA = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation}/> */}
          
            <div className="col-lg-6 col-sm-12 mx-auto">
                <h3 Class="text-success"><b>Seja bem vindo (a)!</b></h3>
                <p className="lead ">
                    Aqui em nossa loja, <em><strong>programadores tem desconto</strong></em> nos amigões para sua casa!
                </p>
            </div>
          
    </View>
  );
};

export default TelaA;
