import React, { Component } from 'react'

import Table from 'react-bootstrap/lib/Table'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Button from 'react-bootstrap/lib/Button'

import './gotenList.css'


const bootstrapLink = <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossOrigin="anonymous" />

const GotenListState = {
    items: []
}

export class GotenList extends Component {
    constructor(props){
        super(props)
        this.state = GotenListState
        this.keyItem = 0
    }

    removeItems() {
        this.setState({items:[]})
    }

    addItem(item, actions) {
        this.setState(prevState => ({
            items: [...prevState.items, {
                item: item,
                key: this.keyItem++,
                ...actions
            }]
        }))
    }

    addItemIteratively(item, numberOfItems=1, actions) {
        for (let index = 0; index < numberOfItems; index++) {
            this.addItem(item, actions)
        }
    }
    
    render(){
        return (
            <div>
                {bootstrapLink}
                <Table striped condensed hover>
                    <thead>
                        <tr>
                            <th>{this.props.title}</th>
                            <th>
                                <label className='actions'>
                                    {this.props.actionsTitle}
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this._getItems()}
                    </tbody>
                </Table>
            </div>
        )
    }
    
    _removeItem = async (item) => {
        if (this.props.onRemove)
            this.props.onRemove()
        else if (item.onRemove)
            item.onRemove()
        this.setState(prevState => ({
            items: [...prevState.items.filter(prevItem => prevItem.key !== item.key)]
        }))
    }

    _getOneAction(logic, name) {
        return (
            <th>
                { logic &&
                <Button
                    bsClass='button-icon'
                    onClick={logic}
                >
                    <Glyphicon glyph={name} />
                </Button>
                }
            </th>
        )
    }

    _getActions(item) {
        return (
            <table className='actions'>
                <tbody>
                    <tr>
                        {item.onSearch ?
                            this._getOneAction(item.onSearch, 'search')
                            : this._getOneAction(this.props.onSearch, 'search')}
                        {item.onEdit ?
                            this._getOneAction(item.onEdit, 'pencil')
                            : this._getOneAction(this.props.onEdit, 'pencil')}
                        {this._getOneAction(_ => this._removeItem(item), 'trash')}
                    </tr>
                </tbody>
            </table>
        )
    }

    _getItems() {
        return this.state.items.map( item => {
            return (
                <tr key={item.key}>
                    <th>
                        {item.item}
                    </th>
                    <th>
                        {this._getActions(item)}
                    </th>
                </tr>
            )
        })
    }
}
