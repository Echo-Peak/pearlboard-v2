import React, {Component, createContext, useContext} from 'react';

export const APIContext = createContext();
export const API = () => useContext(APIContext);
export const APIConsumer = APIContext.Consumer;


// create a provider
export class APIProvider extends Component {
  state = {
      dashboard:{},
      spaces:[],
      sheets:[],
      currentSpace:'',
      currentSheet:''
  };
  constructor(){
    super();
  }
  loadDashboard(){
      
  }
  getSpace(){

  }
  getSheetForProject(){
    
  }
  render() {
      const configObject = {
        ...this.state,
        laodDashboard: this.loadDashboard.bind(this),
        getSpace: this.getSpace.bind(this),
        getSheetForProject: this.getSheetForProject.bind(this),

      };

      return (
          <APIContext.Provider value={configObject}>
              {this.props.children}
          </APIContext.Provider>
      );
    }
}