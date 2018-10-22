import React, { Component } from 'react'
import BootstrapModal from 'react-bootstrap/lib/Modal'

import { GotenList } from '../../src'
import { RowComponent } from './exampleGotenListRowComponent'
import './exampleGotenList.css'


const gotenListRef = 'gotenListRef'


export class ButtonComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    openModal = () => {
        this.setState({isVisible: true})
    }
    
    onRequestClose = () => {
        this.setState({isVisible: false})
    }

    render() {
        return (
            <React.Fragment>
                <button style={this.props.style} className={this.props.className} onClick={this.openModal}>{this.props.children}</button>
                <BootstrapModal show={this.state.isVisible} onHide={this.onRequestClose}>
                    <BootstrapModal.Header>
                        <BootstrapModal.Title>Are you sure you want to delete this item?</BootstrapModal.Title>
                    </BootstrapModal.Header>
                    <BootstrapModal.Body>
                        <button onClick={() => {this.props.onClick(); this.onRequestClose()}}>Yes</button>
                        <button onClick={this.onRequestClose}>No</button>
                    </BootstrapModal.Body>
                </BootstrapModal>
            </React.Fragment>
        )
    }
}

export default class ExampleGotenOwnButtonComponents extends Component {
    render() {
        return (
            <div className='example-goten-list'>
                <div className='items-table'>
                <GotenList
                    useComponentAsRow
                    title={['Input', 'Output']}
                    onRemove={component => console.log(component)}
                    removeIconColor={'red'}
                    customRemoveButton={ButtonComponent}
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
