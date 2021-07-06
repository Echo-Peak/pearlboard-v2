import * as React from 'react';
import { PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';
import styled from 'styled-components';

export default class Widget extends React.Component {
	render() {
		return (
			<Container>
        <Top>
          <h2>TextBox</h2>
        </Top>
        <Content>
          <Input placeholder='TextBox...'/>
        </Content>
				{/* <PortWidget
					style={{
						top: this.props.size / 2 - 8,
						left: -8,
						position: 'absolute'
					}}
					port={this.props.node.getPort(PortModelAlignment.LEFT)}
					engine={this.props.engine}>
					<Port />
				</PortWidget>
				<PortWidget
					style={{
						left: this.props.size / 2 - 8,
						top: -8,
						position: 'absolute'
					}}
					port={this.props.node.getPort(PortModelAlignment.TOP)}
					engine={this.props.engine}>
					<Port />
				</PortWidget>
				<PortWidget
					style={{
						left: this.props.size - 8,
						top: this.props.size / 2 - 8,
						position: 'absolute'
					}}
					port={this.props.node.getPort(PortModelAlignment.RIGHT)}
					engine={this.props.engine}>
					<Port />
				</PortWidget>
				<PortWidget
					style={{
						left: this.props.size / 2 - 8,
						top: this.props.size - 8,
						position: 'absolute'
					}}
					port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
					engine={this.props.engine}>
					<Port />
				</PortWidget> */}
			</Container>
		);
	}
}

const Container = styled.div`
width:240px;
height:240px;
background:white;
box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
border-radius:12px;
padding:6px;
`;

const Input = styled.textarea`
width:100%;
height:100%;
outline: none;
border: none;
`;

const Content = styled.div`
margin-top:10px;
height:80%;
`;
const Top = styled.div`
h2{
  font-weight: bold;
}
`;


const Port = styled.div`
  width: 16px;
  height: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;