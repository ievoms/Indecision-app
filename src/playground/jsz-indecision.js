
console.log('App is running');
const appRoot = document.getElementById('app');


const app = {
    title: 'Programele',
    subtitle: 'Galite naudotis',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();

    }
};
const onRemoveAll = () => {
    app.options = [];
    render();
}
//JSX -JavaScript XML

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);

}

class Person{
    constructor(name, age=0){
        this.name= name;
        this.age = age;
    }
    getDescription(){
       
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, place){
        super(name, age);
        this.place = place;
    }
    getDescription(){
        const eilute = super.getDescription();
        if(this.place){
            return eilute+ ` I am visiting from ${this.place}`;
        }
        return eilute;
    }
}

const me= new Traveler('Ieva',26, 'Kaunas');
console.log(me.getDescription());

const render = () => {
    const template = (
        <div>

            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? 'Here are you options' : 'No options'}
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What shoul I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>Item :{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
render();


