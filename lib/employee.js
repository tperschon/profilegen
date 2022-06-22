// all employees regardless of position have a name, id and email
class Employee {
    constructor(name, id, email, position = 'Unassigned') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    }
    getIco() {
        let ico;
        switch(position) {
            case 'Manager': {
                ico = '<i class="fa-solid fa-mug-hot"></i>';
                break;
            }
            case 'Engineer': {
                ico = '<i class="fa-solid fa-glasses"></i>';
                break;
            }
            case 'Intern': {
                ico = '<i class="fa-solid fa-user-graduate"></i>'
            }
            case 'Unassigned': {
                ico = '<i class="fa-solid fa-question"></i>'
            }
        }
        return ico;
    }
}

module.exports = Employee;