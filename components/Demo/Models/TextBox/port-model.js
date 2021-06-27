import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

export default class DiamondPortModel extends PortModel {
	constructor(alignment) {
		super({
			type: 'TextBox',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel() {
		return new DefaultLinkModel();
	}
}