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

    it('with array title', () => {
        const tree = renderer.create(
            <GotenList
                title={['Title1', 'Title2', 'Title3']}
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
                title={['Title1', 'Title2', 'Title3']}
                actionsTitle='actionsTitle'
                onRemove={_ => null}
                onSearch={_ => null}
                onEdit={_ => null}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with actions colors', () => {
        const tree = renderer.create(
            <GotenList
                onRemove={_ => null}
                onSearch={_ => null}
                onEdit={_ => null}
                removeIconColor='red'
                searchIconColor='blue'
                editIconColor='green'
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with width', () => {
        const tree = renderer.create(
            <GotenList
                title='Title'
                actionTitle='ActionTitle'
                width='50%'
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with alignItems', () => {
        const tree = renderer.create(
            <GotenList
                title='Title'
                actionTitle='ActionTitle'
                alignItems='center'
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with customButtons', () => {
        const customButton = (props, type) => <button onClick={props.onClick}>{`MyButton${type}`}</button>
        const component = renderer.create(
            <GotenList
                title='Title'
                actionTitle='ActionTitle'
                alignItems='center'
                onEdit={_ => null}
                onRemove={_ => null}
                onSearch={_ => null}
                customRemoveButton={(gotenListProps) => customButton(gotenListProps, "Remove")}
                customSearchButton={(gotenListProps) => customButton(gotenListProps, "Search")}
                customEditButton={(gotenListProps) => customButton(gotenListProps, "Edit")}
            />
        )
        component.getInstance().addItem(<React.Fragment>
            <td>
                text from column1
            </td>
            <td>
                text from column2
            </td>
        </React.Fragment>
        )
        component.toJSON()
        expect(component).toMatchSnapshot()
    })
})