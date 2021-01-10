import React from 'react';



const GeneratorRandomNumber = (props) => {
    const generator = () => {
        let win = [];
        let spec = [];
        for (let i = 0; i < 25; i++) {
            let rand1 = Math.floor(Math.random() * 68 + 1);
            if (!win.includes(rand1)) {
                win.push(rand1);
            }
        }
        win = [...new Set(win)];
        win.length = 5;
        for (let i = 0; i < 25; i++) {
            let rand1 = Math.floor(Math.random() * 24 + 1);
            if (!win.includes(rand1)) {
                spec.push(rand1);
            }
        }
        win.sort((a, b) => a - b).push(spec[Math.floor(Math.random() * spec.length)]);
//props.setUsersNumbers()
       props.setUsersNumbers(win)
    };


    return (
        <div>
            <button className="btn btn3" onClick={generator}>Random</button>

        </div>

    )
}
export default GeneratorRandomNumber;