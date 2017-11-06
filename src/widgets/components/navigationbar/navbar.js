import React, { Component } from 'react';
import { Menu, Card, Dropdown, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class Navbar extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            user: "Deaton, Haiden",
            options: [
                {key: 'user', text: 'My Account', icon: null},
                {key: 'sign-out', text: 'Sign Out', icon: null}
            ]
        };

    }      

     data(){
        return(   
        <span >
                <Icon name={'user'} size='large'/> {this.state.user}
        </span>)
     }

    handlefocus(){
        
    }

    render(){
        return(
            <Menu inverted borderless={true} className="nospace"  >
                <Menu.Item>
                    <img style={{height:"auto"}} src="/images/logohex.svg" />
                </Menu.Item>
                <Menu.Item >
                    <div style={{fontSize:'1.5em'}}>DMAMC</div>
                </Menu.Item>
                <Menu.Item style={{fontSize:'1.2em'}}>
                    onboarding
                </Menu.Item>
                <Menu.Item position='right'>
                    <Dropdown className='right' trigger={this.data()} options={this.state.options} pointing='top left' style={{fontSize:'1.2em'}}/>
                </Menu.Item>
            </Menu>
        )
    }
}