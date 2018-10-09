import React from 'react'
import renderer from 'react-test-renderer'

import { GotenList } from '../src'


describe('GotenList methods tests', () => {

    it('check addItem', () => {
        const component = renderer.create(
            <GotenList />
        )
        component.getInstance().addItem(<item>Component</item>)
        expect(component.root.findAllByType('item')).toHaveLength(1)
    })

    it('check add five items with addItem', () => {
        const items = 5
        const component = renderer.create(
            <GotenList />
        )
        for (let index = 0; index < items; index++) {
            component.getInstance().addItem(<item>Component</item>)
        }
        expect(component.root.findAllByType('item')).toHaveLength(items)
    })


    it('check add five items with addItem and show its with mergeColumns', () => {
        const items = 5
        const component = renderer.create(
            <GotenList 
                mergeColumns={true}
            />
        )
        for (let index = 0; index < items; index++) {
            component.getInstance().addItem(<item>Component</item>)
        }
        expect(component.root.findAllByType('item')).toHaveLength(items)
        component.toJSON()
        expect(component).toMatchSnapshot()
    })

    it('check add five items with addItemIteratively', () => {
        const items = 5
        const component = renderer.create(
            <GotenList />
        )
        component.getInstance().addItemIteratively(<item>Component</item>, items)
        expect(component.root.findAllByType('item')).toHaveLength(items)
    })

    it('check add one items with addItemIteratively', () => {
        const items = 1
        const component = renderer.create(
            <GotenList />
        )
        component.getInstance().addItemIteratively(<item>Component</item>, items)
        expect(component.root.findAllByType('item')).toHaveLength(items)
    })

    it('check addItem with an action', () => {
        const component = renderer.create(
            <GotenList />
        )
        component.getInstance().addItem(<item>Component</item>, {onEdit: _ => null})
        component.toJSON()
        expect(component).toMatchSnapshot()
    })

    it('check add five items with addItemIteratively and with an action', () => {
        const items = 5
        const component = renderer.create(
            <GotenList />
        )
        component.getInstance().addItemIteratively(<item>Component</item>, items,
            { onEdit: _ => null })
        component.toJSON()
        expect(component).toMatchSnapshot()
    })

    it('check remove all items', () => {
        const items = 5
        const component = renderer.create(
            <GotenList />
        )
        component.getInstance().addItemIteratively(<item>Component</item>, items,
            { onEdit: _ => null })
        expect(component.root.findAllByType('item')).toHaveLength(items)
        component.getInstance().removeItems()
        expect(component.root.findAllByType('item')).toHaveLength(0)
    })

    it('check addItem with an array of components', () => {
        const component = renderer.create(
            <GotenList />
        )
        component.getInstance().addItem([<item>Component1</item>, <item>Component2</item>])
        expect(component.root.findAllByType('item')).toHaveLength(2)
    })
})
