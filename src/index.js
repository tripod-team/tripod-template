class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const dog = new Animal('dog');



const getData = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 1000);
    });

const main = async () => {
    const res = await getData();
    console.log(res);
};

main();

console.log('aaa');
