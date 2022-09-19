import React, { Component } from 'react';

class Classes extends Component {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        super(n);
        this.name = n;
        this.age = a;
    }

    play() {
        // console.log(a, n);
    }

    // class {
        
    //     constructor(name)
    // }

    render() {
        return (
            <div>
                this is class component 
            </div>
        );
    }
}

export default Classes;