import React from "react";
import { Link } from "react-router-dom";


export default class PersonalForm extends React.Component{

    render(){
        return(
            <form>
              <fieldset>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    Email:
                    <input type="text" />
                </label>
                <label>
                    Email:
                    <input type="text" />
                </label>
                <label>
                    Address:
                    <input type="text" />
                </label>
                <label>
                 <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                 </select>
                </label>
                <Link to="professionalForm">
                <button>
                    Enviar
                </button>
                </Link>
              </fieldset>
            </form>
            
        );
    }
}