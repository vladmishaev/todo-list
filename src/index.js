import React, { Component } from 'react';
import reactDom from 'react-dom';
//
import Header from './components/todo-header';
import Search from './components/todo-search';
import List from './components/todo-list';
import AddListItem from './components/todo-list-add-item';



class App extends Component {

    constructor() {
        super();
        this.state = {
            DataList: [
                { label: 'Drink Coffe', important: false, done: false, id: "dc" },
                { label: 'Bild React App', important: true, done: false, id: "bra" },
                { label: 'Have a lunch', important: false, done: true, id: "hal" }
            ],
            searchLabel: '',
            filterData: 'all'
        }

    }



    searchTask = (arrTask, text) => {
        if (text.length === 0) {
            return arrTask;
        }

        return arrTask.filter((item) => {
            return item.label.toLowerCase().includes(text.toLowerCase());
        });

    }

    changeSearchLabel = (inputValue) => {
        this.setState({
            searchLabel: inputValue
        })

    }

    filterTask = (arrTask, typeFilter) => {
        if (typeFilter === 'all') {
            return arrTask
        }

        const objectSettings = {
            'activ': ['done', false],
            'done': ['done', true]

        }

        const current = objectSettings[typeFilter];


        return arrTask.filter((item) => {
            return item[current[0]] === current[1];
        });
    }

    changefilterTask = (inputValue) => {
        this.setState({
            filterData: inputValue
        })
    }

    rendKey = (lengthKey) => {
        let world = '';
        for (let i = 0; lengthKey > i; i++) {
            const CharCode = Math.floor(Math.random() * (122 - 97) + 97);
            world += String.fromCharCode(CharCode);
        }
        return world;
    }


    deleteItem = (id) => {
        this.setState(({ DataList }) => {
            const indexAr = DataList.findIndex((elm) => elm.id === id);
            const newArray = [...DataList.slice(0, indexAr), ...DataList.slice(indexAr + 1)];

            return {
                DataList: newArray
            }

        });
    }

    addItem = (label) => {
        if (!label) {
            return false;
        }

        this.setState(({ DataList }) => {
            const newTask = {
                label: label,
                important: false,
                id: this.rendKey(6)

            }
            const newData = [...DataList, newTask];
            return {

                DataList: newData
            }
        });
    }

    toggleProperty = (arr, id, state) => {
        const indexArr = arr.findIndex((item) => item.id === id);

        const oldItem = arr[indexArr];
        const newItem = { ...oldItem, [state]: !oldItem[state] };

        return [
            ...arr.slice(0, indexArr),
            newItem,
            ...arr.slice(indexArr + 1)
        ]


    }
    onToggleImportant = (id) => {
        this.setState(({ DataList }) => {
            return {
                DataList: this.toggleProperty(DataList, id, 'important')
            }
        });
    }

    onToggleDone = (id) => {
        this.setState(({ DataList }) => {
            return {
                DataList: this.toggleProperty(DataList, id, 'done')
            }
        });
    }

    render() {
        const { DataList, searchLabel, filterData } = this.state;
        const doneCount = DataList.filter((el) => el.done).length;
        const todoCount = DataList.length - doneCount;
        let tasks = this.searchTask(DataList, searchLabel);
        tasks = this.filterTask(tasks, filterData);

        return (
            <div className="container">
                <Header toDo={todoCount} done={doneCount} />
                <Search funcSearch={this.changeSearchLabel}
                    funcFilter={this.changefilterTask}
                    actFilter={filterData}/>

                <List
                    data={tasks}
                    onDeleted={this.deleteItem}
                    onDone={this.onToggleDone}
                    onImportant={this.onToggleImportant} />

                <AddListItem addFunc={this.addItem} />
            </div>
        );
    }

}

reactDom.render(<App />, document.getElementById('root'));