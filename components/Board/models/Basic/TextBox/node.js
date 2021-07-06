import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';
import DiamondPortModel from './port-model';

export default class DiamondNodeModel extends NodeModel{
	constructor() {
		super({
			type: 'TextBox'
		});
		// this.addPort(new DiamondPortModel(PortModelAlignment.TOP));
		// this.addPort(new DiamondPortModel(PortModelAlignment.LEFT));
		// this.addPort(new DiamondPortModel(PortModelAlignment.BOTTOM));
		// this.addPort(new DiamondPortModel(PortModelAlignment.RIGHT));
	}
}