import React, { Component } from 'react'

import { GotenList } from '../../src'

import './exampleGotenList.css'


const gotenListRef = 'gotenListRef'


export class RowComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <td><input placeholder="Insert text..." onChange={(e) => this.setState({text: e.target.value})}/></td>
                <td>{this.state.text}</td>
            </React.Fragment>
        )
    }
}

export default class ExampleGotenListRowComponent extends Component {
    render() {
        return (
            <div className='example-goten-list'>
                <div className='items-table'>
                <GotenList
                    useComponentAsRow
                    title={['Input', 'Output']}
                    onRemove={component => console.log(component)}
                    removeIconColor={'red'}
                    ref={gotenListRef}
                />
                </div>
                <div className='buttons'>
                    <input
                        type="submit"
                        value="add row component"
                        onClick={_ => {
                            this.refs[gotenListRef].addItem(<RowComponent/>)
                        }}
                    />
                    <input
                        type="submit"
                        value="remove all items"
                        onClick={_ => this.refs[gotenListRef].removeItems()}
                    />
                </div>
            </div>
        )
    }
}
