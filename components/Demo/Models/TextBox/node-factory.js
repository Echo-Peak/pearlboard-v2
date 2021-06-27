import DiamondNodeWidget from './widget';
import DiamondNodeModel from './node';
import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

export default class DiamondNodeFactory extends AbstractReactFactory {
	constructor() {
		super('TextBox');
	}

	generateReactWidget(event) {
		return <DiamondNodeWidget engine={this.engine} size={50} node={event.model} />;
	}

	generateModel(event) {
		return new DiamondNodeModel();
	}
}