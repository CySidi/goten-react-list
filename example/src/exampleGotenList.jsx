import React, { Component } from 'react'

import { GotenList } from '../../src'

import './exampleGotenList.css'


const gotenListRef = 'gotenListRef'

export default class ExampleGotenList extends Component {

    render() {
        return (
            <div className='example-goten-list'>
                <GotenList 
                    title='All components'
                    actionsTitle='Actions actives'
                    //onEdit={_=> null}
                    onSearch={_ => null}
                    ref={gotenListRef}
                />
                <div className='buttons'>
                    <input
                        type="submit"
                        value="add item"
                        onClick={_ => {
                            this.refs[gotenListRef].addItem(
                            <label>
                                Component
                            </label>
                            )
                        }}
                    />
                    <input 
                        type="submit"
                        value="add item with edit action"
                        onClick={_=>{
                            this.refs[gotenListRef].addItem(
                            <label>
                                Component
                            </label>
                            , {onEdit: _ => null})
                        }}
                    />
                    <input
                        type="submit"
                        value="add five items"
                        onClick={_ => {
                            this.refs[gotenListRef].addItemIteratively(
                            <label>
                                Component
                            </label>
                            , 5)
                        }}
                    />
                    <input
                        type="submit"
                        value="add five items with edit action"
                        onClick={_ => {
                            this.refs[gotenListRef].addItemIteratively(
                            <label>
                                Component
                            </label>
                            , 5, {onEdit: _ => null})
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