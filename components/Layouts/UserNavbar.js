import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../../utils/ActiveLink';
import styled from 'styled-components';

class UserNavbar extends React.Component {
    _isMounted = false;

    state = {};
    render() {
        let { pathname } = this.props.router;
        let { products } = this.props;

        return (
            <>
                <header id="user-header">
                </header>

            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default UserNavbar;


const GotoApp = styled.li`
border-left: 1px solid white;
`;