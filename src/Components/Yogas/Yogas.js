import React from 'react';
// import Yoga from '../Yoga/Yoga';

const Yogas = () => {
    const yogas = [
        {
            "id": "64350c0a46982fe31017e6b5",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "name": "Francine Wiley",
            "about": "Aliquip nisi non non id cillum Lorem pariatur quis exercitation commodo. Esse sunt irure aliquip magna ea deserunt aute velit dolor fugiat. Consectetur elit mollit laboris eu laborum do laboris incididunt deserunt in Lorem. Aliqua in fugiat dolore duis duis mollit ipsum excepteur. Amet aliquip minim ex et reprehenderit labore duis velit eiusmod sit. Culpa elit commodo voluptate eiusmod sunt minim cupidatat nulla nisi. Voluptate consequat amet exercitation officia anim fugiat quis aliqua enim aute ullamco.\r\n"
        },
        {
            "id": "64350c0ae4631cacbfabc74b",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "name": "Mcpherson Beck",
            "about": "Ullamco est dolor id et anim cupidatat enim commodo minim anim ullamco ea. Ad aute consectetur labore exercitation ad aliqua aute ipsum eu. Est ex et excepteur fugiat sunt. Qui exercitation non voluptate enim adipisicing ad dolor fugiat dolore cupidatat aliquip. Irure culpa esse nulla labore sint pariatur eiusmod ut excepteur esse. Lorem reprehenderit irure dolor ea aliquip culpa culpa in mollit duis laboris et laboris.\r\n"
        },
        {
            "id": "64350c0a95f021d1e07d7f21",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "name": "Chandler Vang",
            "about": "Amet pariatur labore proident aliquip veniam elit. Consequat occaecat cupidatat laborum eu minim elit et aute. Et laborum mollit elit excepteur in non.\r\n"
        },
        {
            "id": "64350c0a4413ee01be44954a",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "name": "Davis Burke",
            "about": "Eiusmod velit consectetur minim incididunt. Tempor commodo incididunt duis voluptate consequat nisi excepteur dolore tempor cupidatat dolore ut. Velit nisi Lorem veniam quis sunt pariatur anim minim.\r\n"
        },
        {
            "id": "64350c0a1aee0b4ce50f2539",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "name": "Collins Carey",
            "about": "Velit amet cillum culpa et aute. Voluptate aute ex aliqua mollit esse aute esse. Laborum minim nostrud officia culpa cillum elit irure in do. Duis laboris incididunt ea non dolore tempor. Et culpa pariatur cillum ex anim veniam nisi cillum esse velit adipisicing. Fugiat minim duis sit nisi proident nisi proident Lorem consectetur nostrud qui.\r\n"
        },
        {
            "id": "64350c0af28ab6f7f3d33881",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "name": "Burch Ware",
            "about": "Proident ullamco laboris nulla ea sit occaecat ipsum sunt. Consectetur ut tempor cupidatat eiusmod proident eiusmod culpa fugiat deserunt in irure mollit. Pariatur cillum consequat proident id nulla labore voluptate aliqua exercitation ipsum ut do anim in. Id sit adipisicing labore ipsum amet anim exercitation aliquip eu ipsum laborum aliqua ipsum est.\r\n"
        }
    ]
    return (
        <div>
            <h1>Hello Yoga World !</h1>
            <p>name:{yogas.name}</p>
            {/* {
                yogas.map(yoga => <Yoga
                    key={yoga.id}
                    Name={yoga}
                ></Yoga>)
            } */}
        </div>
    );
};

export default Yogas;