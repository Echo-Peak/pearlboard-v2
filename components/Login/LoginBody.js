import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const googleIcon = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" className="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>;
const miniIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"></path><path fill="#f35325" d="M1 1h10v10H1z"></path><path fill="#81bc06" d="M12 1h10v10H12z"></path><path fill="#05a6f0" d="M1 12h10v10H1z"></path><path fill="#ffba08" d="M12 12h10v10H12z"></path></svg>;


let providers = [
  {
    id:'google', text:'Log in with Google', color:'#4285f4', icon: googleIcon,
  },
  {
    id:'mini', text:'Log in with mini', color:'#9265f4', icon: miniIcon,
  }
];
class LoginBody extends Component {
    render() {
        return (
            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image">
                                <img src='/images/marketing.png' alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <ProviderList>
                                  {providers.map(((provider , index)=> (
                                    <ProviderItem color={provider.color} key={`provider-item-${index}`} onPress={() => this.props.onProviderSelected(provider.id)}>
                                      <ProviderIconContainer>
                                        <ProviderIcon>
                                          {provider.icon}
                                        </ProviderIcon>
                                      </ProviderIconContainer>
                                      <ProviderText>
                                        {provider.text}
                                      </ProviderText>
                                    </ProviderItem>
                                  )))}
                                </ProviderList>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginBody;

const ProviderList = styled.ul`
width:300px;
`;
const ProviderItem = styled.li`
list-style:none;
flex-direction: row;
display: flex;
margin-top:18px;
margin-bottom:18px;
background-color: ${props => props.color};
outline: 1px solid ${props => props.color};
box-shadow: 0px 0px 6px rgba(0,0,0,0.3);
cursor:pointer;
transition: all .3s;
&:hover{
  box-shadow: 0px 0px 10px ${props => props.color};
}
//padding:6px;
`;
const ProviderIcon = styled.div`
  width:40px;
  height:40px;
  background: white;
  padding:8px;
  //padding:8px;
`;
const ProviderIconContainer = styled.div`
  order:1;
  flex:1;
`;
const ProviderText = styled.span`
flex:3;
order:2;
height:40px;
color:white;
line-height: 40px;


`;