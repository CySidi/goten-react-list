import React, { Component } from 'react'

import { GotenList } from '../../src'

import './exampleGotenList.css'


const gotenListRef = 'gotenListRef'

export default class ExampleGotenList extends Component {
    render() {
        return (
            <div className='example-goten-list'>
                <div className='items-table'>
                <GotenList
                    title={['First', 'Second']}
                    //onSearch={component => console.log(component)}
                    onRemove={component => console.log(component)}
                    removeIconColor={'red'}
                    ref={gotenListRef}
                />
                </div>
                <div className='buttons'>
                    <input
                        type="submit"
                        value="add item with 2 components"
                        onClick={_ => {
                            this.refs[gotenListRef].addItem([
                                <label style={{textAlign: 'right'}}>
                                        Component1
                                </label>,
                                <label>
                                        Component2
                                </label>
                            ])
                        }}
                    />
                    <input 
                        type="submit"
                        value="add item with 3 components"
                        onClick={_=>{
                            this.refs[gotenListRef].addItem([
                                <label>
                                    Component1
                                </label>,
                                <label>
                                    Component2
                                </label>,
                                <label>
                                    Component3
                                </label>], {
                                onEdit: component => console.log(component),
                                onRemove: component => console.log(component),
                                onSearch: component => console.log(component),
                                editIconColor: 'green',
                                removeIconColor: 'blue',
                                searchIconColor: 'red'
                            })
                        }}
                    />
                    <input
                        type="submit"
                        value="add five items with one component"
                        onClick={_ => {
                            this.refs[gotenListRef].addItemIteratively(
                            <label>
                                Component1
                            </label>,
                            5,
                            {onSearch: component => console.log(component)})
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
