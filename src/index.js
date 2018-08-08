import React, { Component } from 'react'

import PropTypes from 'prop-types'

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
    
    getItemList() {
        return this.state.items
    }

    _removeItem = async (item) => {
        if (item.onRemove)
            item.onRemove(item.item)
        else if (this.props.onRemove)
            this.props.onRemove(item.item)
        this.setState(prevState => ({
            items: [...prevState.items.filter(prevItem => prevItem.key !== item.key)]
        }))
    }

    _getOneAction(item, logic, name) {
        return (
            <th>
                { logic &&
                <Button
                    bsClass='button-icon'
                    onClick={_ => logic(item)}
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
                            this._getOneAction(item.item, item.onSearch, 'search')
                            : this._getOneAction(item.item, this.props.onSearch, 'search')}
                        {item.onEdit ?
                            this._getOneAction(item.item, item.onEdit, 'pencil')
                            : this._getOneAction(item.item, this.props.onEdit, 'pencil')}
                        {this._getOneAction(item.item, _ => this._removeItem(item), 'trash')}
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

GotenList.propTypes = {
    actionsTitle: PropTypes.string,
    onEdit: PropTypes.func,
    onSearch: PropTypes.func,
    onRemove: PropTypes.func,
    title: PropTypes.string
}