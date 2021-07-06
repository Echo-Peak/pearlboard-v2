import NodeFactory from './node-factory';
import PortFactory from './port-factory';
import PortModel from './port-model';
import NodeModel from './node';

import {PortModelAlignment } from '@projectstorm/react-diagrams';
export default {
  register(currentEngine){
		currentEngine.getPortFactories().registerFactory(new PortFactory('TextBox', (config) => new PortModel(PortModelAlignment.LEFT)));
	  currentEngine.getNodeFactories().registerFactory(new NodeFactory());
  },
  widget: NodeModel
}