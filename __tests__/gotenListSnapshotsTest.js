import React from 'react'
import renderer from 'react-test-renderer'

import { GotenList } from '../src'


describe('GotenList snapshots', () => {

    it('without title and actions title', () => {
        const tree = renderer.create(
            <GotenList />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('without title', () => {
        const tree = renderer.create(
            <GotenList
                actionsTitle='Actions'
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('without actions title', () => {
        const tree = renderer.create(
            <GotenList
                title='Title'
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with title and action', () => {
        const tree = renderer.create(
            <GotenList
                title='Title'
                actionsTitle='Actions'
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with onSearch', () => {
        const tree = renderer.create(
            <GotenList
                onSearch={_ => null}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with onEdit', () => {
        const tree = renderer.create(
            <GotenList
                onSearch={_ => null}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with onRemove', () => {
        const tree = renderer.create(
            <GotenList
                onRemove={_ => null}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with onEdit, onRemove and onSearch', () => {
        const tree = renderer.create(
            <GotenList
                onSearch={_ => null}
                onEdit={_ => null}
                onRemove={_ => null}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with all titles and actions', () => {
        const tree = renderer.create(
            <GotenList
                title='Title'
                actionsTitle='actionsTitle'
                onRemove={_ => null}
                onSearch={_ => null}
                onEdit={_ => null}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})