import React, { Component } from 'react';
import { Menu, Card, Dropdown, Grid, Table, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';

import data from '../../../config/data';

export default class CardGroups extends Component {
    
    constructor(props){
        super(props)

        this.state = { 
            data

        };
    }     

    cardGenerator(){


        return this.state.data.cards.map(item  => {
           let {id, date, content, title} = item;
            return (
            <Card >
                <Card.Content> 
                    <Grid stackable={false} >
                        <Grid.Column stretched={true} color='blue' width={4}>
                            <Grid.Row fluid className='centered'>{date.month}</Grid.Row>
                            <Grid.Row className='centered big'>{date.day}</Grid.Row>
                            <Grid.Row className='centered'>{date.year}</Grid.Row>
                        </Grid.Column>
                        <Grid.Column  stretched={true} className='left' width={11}>
                            <Grid.Row className='title'>
                                ({title.priority}) {title.content}
                            </Grid.Row>
                            <Grid.Row>
                                {content.description}
                            </Grid.Row>
                            <Card.Content className='centered'> <Link to={content.link}>Read More</Link></Card.Content>
                        </Grid.Column >
                    </Grid>
                </Card.Content>
            </Card>
            )
        });

    }

    render(){
        return(
            <div className='padded'>
            <Card.Group>
                {this.cardGenerator()}
            </Card.Group>

            </div>
        )
    }


}