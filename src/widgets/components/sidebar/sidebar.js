import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router'

import data from '../../../config/data'

class SidebarLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      activeItem: '',
      sites: data.sites
    }
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  getSiteNotification(i) {
    let notificationCount = this.state.sites[i].notification;
    if (notificationCount > 0)
      return (
        <span className='notification-count' style={{backgroundColor: this.state.sites[i].color}}>
          <span className='notification-text'>{notificationCount}</span>
        </span>
      )
  }

  renderSites() {
    let sites = this.state.sites;
    return sites.map((site, i) => {
      return (
        <div className='site-button'>
          <Link to={`/base/${site.name}`} key={'k:' + site.name}>
            <Menu.Item
              key={site.name}
              name={site.name}
              active={this.state.activeItem === site.name}
              onClick={this.handleItemClick.bind(this)}>
                <span>
                  {this.showColorBox(i)}
                  <span className='site-name'>{site.name}</span>
                  {this.getSiteNotification(i)}
                </span>
            </Menu.Item>
          </Link>
        </div>
      )
    })
  }

  showColorBox(i) {
    if (this.state.activeItem == this.state.sites[i].name)
      return <div className='color-box' style={{backgroundColor: this.state.sites[i].color}}></div>
  }

  customizeButton() {
    return (
      <div className='customize-button-position'>
        <button className='customize-button-style'>
          <img src='images/custom_settings.png' style={{width:"2.5em", height:"3em"}}/>
          <div style={{color: "#ffffff", fontSize: ".5em"}}>Customize</div>
        </button>
      </div>
    )
  }

  render() {
    const { visible, activeItem } = this.state;
    return (
      <div className='sidebar'>
        <Sidebar.Pushable as={Segment} className='no-border'>
          <Sidebar as={Menu} style={{background:"#444444"}} width='thin' visible={visible} vertical inverted>
            {this.renderSites()}
            {this.customizeButton()}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeft