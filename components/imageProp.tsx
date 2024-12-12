import { Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const imageProp = ({ source }) => {
    return (
      <section>
      <TouchableOpacity>
        <Image src={{uri: source}} />
      </TouchableOpacity>
      </section>
    );
  };
  
  export default imageProp;