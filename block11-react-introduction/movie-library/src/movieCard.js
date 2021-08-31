
import React from 'react'; // JSX transform turns it into regular JavaScript:

class MovieCard extends React.Component { // component estilo class
    render() { // fator fundamental na construção de classe component
        const { title, subtitle, storyLine, imagePath, rating } = this.props.movie; 

        return ( 
            <div className="movie">
               <img src={imagePath} alt={`${title} sprite`} />
               <h4> {title} </h4>
               <h5> {subtitle} </h5>
               <p> {storyLine} </p>
            </div>
        );
    }
}