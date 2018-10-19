import React, { Component } from 'react'

import PropTypes from 'prop-types'

import './gotenList.css'


const GotenListState = {
    items: [],
    length: 0
}
const defaultKeyValue = 'GotenListKey_'
const defaultAlignItems = 'left'
const defaultWidth = '100%'
const defaultmergeColumns = false
const actionsAlign = 'right'

export class GotenList extends Component {
    constructor(props){
        super(props)
        this.state = GotenListState
        this.keyItem = 0
        this.keyValue = props.uniqueKey ? props.uniqueKey : defaultKeyValue
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
            }],
            length: prevState.length < item.length ? item.length : prevState.length
        }))
    }

    addItemIteratively(item, numberOfItems=1, actions) {
        for (let index = 0; index < numberOfItems; index++) {
            this.addItem(item, actions)
        }
    }
    
    getItemList() {
        return this.state.items
    }

    render(){
        const keyTitlesVoid = '_title_void'
        const keyActions = '_actionsTitle'
        return (
                <table
                    width={this.props.width ? this.props.width : defaultWidth}
                    className='table table-striped table-condensed table-hover'
                >
                    <thead 
                        align={this.props.alignItems ? this.props.alignItems : defaultAlignItems}
                        className='table-thead'
                    >
                        <tr>
                            {this._adjust(this._getTitle(this.props.title), this.keyValue + keyTitlesVoid, true) }
                            <th 
                                key={this.keyValue + keyActions}
                                align={actionsAlign}
                            >
                                {this.props.actionsTitle}
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        align={this.props.alignItems ? this.props.alignItems : defaultAlignItems}
                    >
                        {this._getItems()}
                    </tbody>
                </table>
        )
    }
    
    componentDidUpdate() {
        const titleLength = Array.isArray(this.props.title) ? 
                    this.props.title.length : 1
        if (titleLength > this.state.length)
            this.setState({ length: titleLength })
    }

    _removeItem = async (item) => {
        this.setState(prevState => ({
            items: [...prevState.items.filter(prevItem => prevItem.key !== item.key)]
        }))
    }

    _getTitle(title) {
        const keyTitle = '_title'
        return !Array.isArray(title) ?
            [<th key={this.keyValue + keyTitle}>{title}</th>] :
            title.map((titlePerCol, index) => (
                <th key={this.keyValue + keyTitle + index}>
                    {titlePerCol}
                </th>
            ))
    }

    _getOneAction(item, logic, color, name) {
        return (
            <React.Fragment>
                { logic &&
                <button
                    onClick={_ => logic(item)}
                    type='button'
                    className='button-icon button-icon-default'
                    style={{color:color}}
                    disabled={false}
                >
                    <span
                        className={'glyphicon glyphicon-' + name}
                    />
                </button>
                }
            </React.Fragment>
        )
    }

    _getActions(item) {
        const onRemove = item.onRemove ? _ => {
            item.onRemove(item.item)
            this._removeItem(item)
        } : _ => {
            this.props.onRemove(item)
            this._removeItem(item)
        }
        return (
            <React.Fragment>
                { this._getOneAction(item.item, 
                    item.onSearch ? item.onSearch : this.props.onSearch, 
                    item.searchIconColor ? item.searchIconColor : this.props.searchIconColor,
                    'search')}
                { this._getOneAction(item.item,
                    item.onEdit ? item.onEdit : this.props.onEdit, 
                    item.editIconColor ? item.editIconColor : this.props.editIconColor,
                    'pencil')}
                { this._getOneAction(item.item, 
                    onRemove,
                    item.removeIconColor ? item.removeIconColor : this.props.removeIconColor,
                    'trash')}
            </React.Fragment>
        )
    }

    _getItems() {
        const actionsKey = '_actions'
        return this.state.items.map((item) => 
            this.props.useComponentAsRow 
                ? <tr key={this.keyValue + item.key}>
                    {item.item}
                    <td
                        align={actionsAlign}
                        key={this.keyValue + item.key + actionsKey}
                    >
                        { this._getActions(item) }
                    </td>
                </tr>
                : <tr key={this.keyValue + item.key}>
                    {this._adjust(
                        this._getComponents(item.item, this.keyValue + item.key),
                        this.keyValue + item.key
                    )}
                    <td
                        align={actionsAlign}
                        key={this.keyValue + item.key + actionsKey}
                    >
                        { this._getActions(item) }
                    </td>
                </tr>
            )
    }

    _adjust(components, initialKey, title=false) {
        const voidKey = '_void'
        const mergeColumns = this.props.mergeColumns ? 
                this.props.mergeColumns : defaultmergeColumns
        if (mergeColumns)
            return components
        const adjuster= key => title ?
            <th key={key}></th> :
            <td key={key}></td>
        const lenToAdjust = this.state.length - components.length
        let componentsAdjusted = components.slice()
        for (let index = 0; index < lenToAdjust; index++) {
            componentsAdjusted.push(adjuster(initialKey + voidKey + index))
        }
        return componentsAdjusted
    }

    _getComponents(item, key) {
        const keyComponent = '_component'
        return !Array.isArray(item) ?
            [<td key={key + keyComponent}>
                {item}
            </td>] :
            item.map((component, index) =>
            <td
                key={key + keyComponent + index}
            >
                {component}
            </td>)
    }

}

GotenList.propTypes = {
    actionsTitle: PropTypes.string,
    alignItems: PropTypes.string,
    mergeColumns: PropTypes.bool,
    onEdit: PropTypes.func,
    editIconColor: PropTypes.string,
    onSearch: PropTypes.func,
    searchIconColor: PropTypes.string,
    onRemove: PropTypes.func,
    removeIconColor: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    uniqueKey: PropTypes.string,
    width: PropTypes.string
}