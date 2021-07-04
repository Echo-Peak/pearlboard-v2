import React, {Component, createContext, useContext} from 'react';

export const APIContext = createContext();
export const API = () => useContext(APIContext);
export const APIConsumer = APIContext.Consumer;


// create a provider
export class APIProvider extends Component {
    state = {
        apples:12
    };
    constructor(){
      super();
    }
    getCount(){
        
    }
  render() {
      const configObject = {
        ...this.state,
        getCount: this.getCount.bind(this)
      };

      return (
          <APIContext.Provider value={configObject}>
              {this.props.children}
          </APIContext.Provider>
      );
    }
}