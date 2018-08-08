import React from 'react'
import renderer from 'react-test-renderer'

import { GotenList } from '../src'

const button = {className: 'button-icon button-icon-default'}
const edit = 'pencil'
const search = 'search'
const remove = 'trash'

describe('GotenList actions tests', () => {

    it('onEdit action', () => {
        const gotenList = renderer.create(
            <GotenList
                onEdit={jest.fn()}
                onSearch={jest.fn()}
                onRemove={jest.fn()}
            />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>)
        const editButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == edit)[0]
        editButton.props.onClick()
        expect(gotenListInstance.props.onSearch).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onRemove).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onEdit).toHaveBeenCalledTimes(1)
    })

    it('onSearch action', () => {
        const gotenList = renderer.create(
            <GotenList
                onEdit={jest.fn()}
                onSearch={jest.fn()}
                onRemove={jest.fn()}
            />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>)
        const searchButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == search)[0]
        searchButton.props.onClick()
        expect(gotenListInstance.props.onEdit).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onRemove).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onSearch).toHaveBeenCalledTimes(1)
    })

    it('onRemove action', () => {
        const gotenList = renderer.create(
            <GotenList
                onEdit={jest.fn()}
                onSearch={jest.fn()}
                onRemove={jest.fn()}
            />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>)
        const removeButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == remove)[0]
        removeButton.props.onClick()
        expect(gotenListInstance.props.onEdit).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onSearch).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onRemove).toHaveBeenCalledTimes(1)
    })

    it('onEdit action passed without props', () => {
        const actions = {
            onEdit: jest.fn(),
            onSearch: jest.fn(),
            onRemove: jest.fn()
        }
        const gotenList = renderer.create(
            <GotenList />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>, actions)
        const editButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == edit)[0]
        editButton.props.onClick()
        expect(actions.onSearch).toHaveBeenCalledTimes(0)
        expect(actions.onRemove).toHaveBeenCalledTimes(0)
        expect(actions.onEdit).toHaveBeenCalledTimes(1)
    })

    it('onSearch action passed without props', () => {
        const actions = {
            onEdit: jest.fn(),
            onSearch: jest.fn(),
            onRemove: jest.fn()
        }
        const gotenList = renderer.create(
            <GotenList />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>, actions)
        const editButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == search)[0]
        editButton.props.onClick()
        expect(actions.onEdit).toHaveBeenCalledTimes(0)
        expect(actions.onRemove).toHaveBeenCalledTimes(0)
        expect(actions.onSearch).toHaveBeenCalledTimes(1)
    })

    it('onRemove action passed without props', () => {
        const actions = {
            onEdit: jest.fn(),
            onSearch: jest.fn(),
            onRemove: jest.fn()
        }
        const gotenList = renderer.create(
            <GotenList />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>, actions)
        const editButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == remove)[0]
        editButton.props.onClick()
        expect(actions.onEdit).toHaveBeenCalledTimes(0)
        expect(actions.onSearch).toHaveBeenCalledTimes(0)
        expect(actions.onRemove).toHaveBeenCalledTimes(1)
    })

    it('onEdit action passed with props and methods', () => {
        const actions = {
            onEdit: jest.fn(),
            onSearch: jest.fn(),
            onRemove: jest.fn()
        }
        const gotenList = renderer.create(
            <GotenList
                onEdit={jest.fn()}
                onSearch={jest.fn()}
                onRemove={jest.fn()}
            />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>, actions)
        const editButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == edit)[0]
        editButton.props.onClick()
        expect(gotenListInstance.props.onSearch).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onRemove).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onEdit).toHaveBeenCalledTimes(0)
        expect(actions.onSearch).toHaveBeenCalledTimes(0)
        expect(actions.onRemove).toHaveBeenCalledTimes(0)
        expect(actions.onEdit).toHaveBeenCalledTimes(1)
    })

    it('onSearch action passed with props and methods', () => {
        const actions = {
            onEdit: jest.fn(),
            onSearch: jest.fn(),
            onRemove: jest.fn()
        }
        const gotenList = renderer.create(
            <GotenList
                onEdit={jest.fn()}
                onSearch={jest.fn()}
                onRemove={jest.fn()}
            />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>, actions)
        const editButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == search)[0]
        editButton.props.onClick()
        expect(gotenListInstance.props.onEdit).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onRemove).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onSearch).toHaveBeenCalledTimes(0)
        expect(actions.onEdit).toHaveBeenCalledTimes(0)
        expect(actions.onRemove).toHaveBeenCalledTimes(0)
        expect(actions.onSearch).toHaveBeenCalledTimes(1)
    })

    it('onRemove action passed with props and methods', () => {
        const actions = {
            onEdit: jest.fn(),
            onSearch: jest.fn(),
            onRemove: jest.fn()
        }
        const gotenList = renderer.create(
            <GotenList
                onEdit={jest.fn()}
                onSearch={jest.fn()}
                onRemove={jest.fn()}
            />
        )
        const gotenListInstance = gotenList.getInstance()
        gotenListInstance.addItem(<item>Component</item>, actions)
        const editButton = gotenList.root.findAllByProps(button)
            .filter(element => element.props.children.props.glyph == remove)[0]
        editButton.props.onClick()
        expect(gotenListInstance.props.onEdit).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onSearch).toHaveBeenCalledTimes(0)
        expect(gotenListInstance.props.onRemove).toHaveBeenCalledTimes(0)
        expect(actions.onEdit).toHaveBeenCalledTimes(0)
        expect(actions.onSearch).toHaveBeenCalledTimes(0)
        expect(actions.onRemove).toHaveBeenCalledTimes(1)
    })
})