import React, { Component } from "react";
// import Components from "@lib";
import Components from "@src";
import pop from "@src/tools/pop";
import { Warn } from '@src/components/Message'
const PROPS = {
};

class Detail extends Component {
  componentDidMount() {
    const ComponentItem = Components[this.name];
    const popNode = pop(<Warn onClose={()=>{alert('close')}}>asd</Warn>)({
      animeShow:'slideRightIn',
      autoClose: 2000,
      animeHide:'slideRightOut',
      layer:true
    })
  }

  render() {
    const { match } = this.props;
    const name = match.params.name.replace(
      /^(.)(.*)$/,
      (match, $1, $2) => $1.toUpperCase() + $2
    );
    this.name = name;
    const ComponentItem = Components[name];
    if (ComponentItem) {
      return <ComponentItem {...PROPS}>ComponentItem</ComponentItem>;
    }
    return <div>ComponentItem not found</div>;
  }
}

export default Detail;
