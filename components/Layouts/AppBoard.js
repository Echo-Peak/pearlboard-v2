import createEngine, { 
  DefaultNodeModel, 
  DiagramModel,
  PortModelAlignment,
  Snapping,
  SnapSettingsModel,
  SnapConstraints,
} from '@projectstorm/react-diagrams';
import * as React from 'react';
// import the custom models
import { DiamondNodeModel } from '../Demo/DiamondNodeModel';
import { DiamondNodeFactory } from '../Demo/DiamondNodeFactory';
import { SimplePortFactory } from '../Demo/SimplePortFactory';
import { DiamondPortModel } from '../Demo/DiamondPortModel';
import { CanvasWidget } from '@projectstorm/react-canvas-core';



export default class AppBoard extends React.Component{
  constructor(){
    super();
    let engine = createEngine();
    engine
		.getPortFactories()
		.registerFactory(new SimplePortFactory('diamond', (config) => new DiamondPortModel(PortModelAlignment.LEFT)));

	  engine.getNodeFactories().registerFactory(new DiamondNodeFactory());

    var model = new DiagramModel();

    //3-A) create a default node
    var node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
    node1.setPosition(100, 200);
  
    //3-B) create our new custom node
    var node2 = new DiamondNodeModel();
    node2.setPosition(250, 108);
  
  
    //4) add the models to the root graph
    model.addAll(node1, node2);
  
    //5) load model into engine
    engine.setModel(model);

    this.engine = engine;

  }
  loadFromData(){

  }
  render(){
    return <CanvasWidget engine={this.engine} style={{overflow:'visible'}} />
  }
}

