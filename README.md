# Goten List

**Goten List** description.

## Index

- [**Install**](#install)
- [**Usage**](#usage)
- [**Example of use**](#example-of-use)
- [**Props**](#props)
- [**Methods**](#methods)
- [**Contributions**](#contributions)

## Install

```npm install -s goten-react-list```

## Usage

``` jsx
var GotenList = require('goten-react-list').GotenForm; // ES5
 
import { GotenList } from 'goten-react-list'; // ES6

...

    <GotenList 
        ref = {this.ref}
    />

    ...

    addItemInList() {
        this.ref.addList(<label>Component</label>)
    }
```

## Example of use

``` jsx
import React, { Component } from 'react'

import { GotenList } from 'goten-react-list'


const gotenListRef = 'gotenListRef'

export default class ExampleGotenList extends Component {

    render() {
        return (
            <div>
                <GotenList
                    title='All components'
                    actionsTitle='Actions actives'
                    //onEdit={component => console.log(component)}
                    onSearch={component => console.log(component)}
                    ref={gotenListRef}
                />
                <div>
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
                </div>
            </div>
        )
    }
}
```

## Props


| Prop Name    | Type     | Default | Required | Description                                                            |
|--------------|----------|---------|----------|------------------------------------------------------------------------|
| onEdit       | Function |         | false    | This function is executed when the edit icon of the item is pressed.   |
| onRemove     | Function |         | false    | This function is executed when the remove icon of the item is pressed. |
| onSearch     | Function |         | false    | This function is executed when the search icon of the item is pressed. |
| actionsTitle | String   |         | false    | Title of the actions fields                                            |
| title        | String   |         | false    | Title of the components fields                                         |

## Methods

- **addItem**

This method recive an component and optionaly an object with the actions of the component. One time this method is executed, the component is added to the list. (**addItem(COMPONENT, OBJECT_OF_ACTIONS)**).

- **addItemIteratively**

This method recive an component, the number of iterations and optionaly an object with the actions of the component. One time this method is executed, the component is added to the list. (**addItemIteratively(COMPONENT, NUMBER_OF_ITERATION, OBJECT_OF_ACTIONS)**).

- **removeItems**

This method remove all items fo

## Contributions

To contribute to this package, we propose the following workflow:
1. Add an issue with related tags to describe the contribution (is it a bug?, a feature request?).
2. Branch your solution from develop, with the name as ```#<issue_number>_<descriptive_name>```.
3. Send a pull request and wait for approval/corrections.
