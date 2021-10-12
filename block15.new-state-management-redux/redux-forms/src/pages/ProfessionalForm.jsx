import React from "react";
import { Link } from "react-router-dom";


export default class ProfissionalForm extends React.Component{

    render(){
        return(
            <form>
              <fieldset>
                <label>
                   <textarea>
                       Text area
                   </textarea>
                </label>
                <label>
                    Cargo:
                    <input type="text" />
                </label>
                <label>
                   <textarea>
                       Text area
                   </textarea>
                </label>
                <Link to="formDisplay">
                <button>
                    Enviar
                </button>
                </Link>
              </fieldset>
            </form>
            
        );
    }
}