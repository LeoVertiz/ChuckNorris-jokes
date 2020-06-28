import React from 'react';

export default function JokeCard(props) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
            <div className="col-md-4">
                <img src={props.joke.icon_url} className="card-img" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <p className="card-text">{props.joke.value}</p>
                <p className="card-text"><small className="text-muted">
                    <a href={props.joke.url} target="_blank" rel="noopener noreferrer"> Ir a Chuck Norris Jokes API </a>
                </small></p>
                </div>
            </div>
            </div>
        </div>
    );
}