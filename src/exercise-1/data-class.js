import { string } from 'prop-types';
import { Boolean} from 'prop-types';

export class Data{
    name = '';
    lastname= '';
    email = '';
    conected = false;

    constructor(name, lastname, email, conected){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.conected = conected;
    }
}

Data.PropTypes = {
    name: string,
    lastname: string,
    email: string,
    conected: Boolean
}