import React, { useEffect, useState } from 'react'

export default function ClassComponent() {

    const [data, setData] = useState('');

    class Car {
        constructor(name) {
            this.name = name;
        }

        play(status) {
            return (this.name, status);
            // console.log(this.name, status);
        }
    }

    const car1 = new Car("Suzuki");
    const attach = car1.play("on fire");

    const car2 = new Car("BMW");

    useEffect(() => {
        setData(attach)
    }, [attach])
    // console.log(car1);
    console.log(attach);
    console.log(data);

    return (
        <div>
            <h1> Check Class Component Working or not ? {car1.name} </h1>
            <h1> Check Class Component Working or not ? {attach} </h1>
            <h1> Check Class Component Working or not ? {car1.name} {attach} </h1>


        </div>
    )
}
