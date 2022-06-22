// all employees regardless of position have a name, id, email and icon, icon depending on their position
class Employee {
    constructor(name, id, email, position = 'Unassigned') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
        // switch-case to give the proper icon based on the type of employee
        switch(this.position) {
            case 'Manager': {   
                this.icon = '<i class="fa-solid fa-mug-hot"></i>';
                break;
            };
            case 'Engineer': {
                this.icon = '<i class="fa-solid fa-glasses"></i>';
                break;
            };
            case 'Intern': {
                this.icon = '<i class="fa-solid fa-user-graduate"></i>'
                break;
            };
            case 'Unassigned': {
                this.icon = '<i class="fa-solid fa-question"></i>'
                break;
            };
        };
    };
};

module.exports = Employee;