import React, {Component, createContext, useContext} from 'react';

export const BillingContext = createContext();
export const Billing = () => useContext(BillingContext);
export const BillingConsumer = BillingContext.Consumer;


// create a provider
export class BillingProvider extends Component {
  state = {
  };
  constructor(){
    super();
  }
  render() {
      const configObject = {
        ...this.state,

      };

      return (
          <BillingContext.Provider value={configObject}>
              {this.props.children}
          </BillingContext.Provider>
      );
    }
}