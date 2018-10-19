# Goten List

**Goten List** is a React component that helps avoid boilerplate when creating tables.

- GotenList will control the items in its Table, so you can forget about managing certain lifecycle methods you would normally need.
- GotenList provides an array of buttons, which you can customize and define functions for
    - Currently, it shows inspect, edit, and delete buttons.

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
                    onRemove={component => console.log(component)}
                    removeItemColor={'red'}
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

| Prop Name       	| Type         	| Default       	| Required 	| Description                                                            	|
|-----------------	|--------------	|---------------	|----------	|------------------------------------------------------------------------	|
| onRemove        	| Function     	|               	| false    	| This function is executed when the remove icon of the item is pressed. 	|
| removeIconColor 	| String       	|  black        	| false    	| Color of the remove icon.                                              	|
| onEdit          	| Function     	|               	| false    	| This function is executed when the edit icon of the item is pressed.   	|
| editIconColor   	| String       	|  black        	| false    	| Color of the edit icon.                                                	|
| onSearch        	| Function     	|               	| false    	| This function is executed when the search icon of the item is pressed. 	|
| searchIconColor 	| String       	|  black        	| false    	| Color of the search icon.                                              	|
| title           	| Array/String 	|               	| false    	| Title of the columns.                                        	|
| actionsTitle    	| String       	|               	| false    	| Title of the actions column (the last one).                                            	|
| mergeColumns     	| boolean      	| false         	| false         	| Merge void columns.                                                    	|
| alignItems      	| String       	|  left         	| false         	| Align prop ofjk the table.                                                   	|
| width           	| String       	| 100%          	| false         	| Width prop of the table.                                                    	|
| uniqueKey       	| String       	| GotenListKey_ 	| false         	| UniqueKey will be used for create all keys of the items in the table.  	|
| useComponentAsRow       	| Boolean       	| false 	| false         	| useComponentAsRow is used to pass a Component as a row. This component should render <td> only (no need to use <tr>), with whatever it is you want to render inside each column.  	|

## Methods

- **addItem(COMPONENT, OBJECT_OF_ACTIONS)**

This method receives a component or an array of components. You can also pass an object as a second parameter to define the action methods of the specific item (it overrides the ones passed to GotenList). Once this method is executed, the component is added to the list.

- **addItemIteratively(COMPONENT, NUMBER_OF_ITERATION, OBJECT_OF_ACTIONS)**

Same as **addItem**, but you can specify the number of iterations to add the component to the list a certain amount of times.

- **removeItems**

This method removes all items of the list. (**removeItems()**).

## Contributions
To contribute to this package, we use the following workflow:
1. Add an issue with related tags to describe the contribution (is it a bug? a feature request?).
2. Branch your solution from develop, naming it like `#<issue_number>-<descriptive_name>`.
3. Send a pull request and wait for approval/corrections.
