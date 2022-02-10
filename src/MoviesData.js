import React from 'react'
//CSS import
import './css/MoviesData.css'


export const MoviesData = (props) => {
    let data = {...props.state.mdata}
    const [act1, act2, act3] = data.Actors.split(',')
    return (
        <div>
            
            <div className="Trial">
                <div className="imagedata">
                    <img src={data.Poster} alt={data.Title}></img>
                    <div >
                        <div className="imagedata_sub">
                            <p>Box Office</p>
                            <p className="adjust">{data.BoxOffice}</p>
                        </div>
                        <div className="imagedata_sub">
                            <p>Runtime</p>
                            <p>{data.Runtime}</p>
                        </div>
                        
                    </div>
                </div>
            
                <div className="ShowData">
                    
                    <div className="ShowMData">
                        <h1>{data.Title}</h1>
                        <p>{data.Genre}</p>
                        <h4>Actors</h4>
                        <div className="Actors">
                            <p>{act1}</p>
                            <p>{act2}</p>
                            <p>{act3}</p>
                        </div>
                        <p style={{color:data.imdbRating < 7 ? 'Red' : 'Green'}}>imdbRating {data.imdbRating}</p>
                        <p>{data.Plot}</p>
                        <p>{data.Awards}</p>
                    </div>
                </div>
            </div>
            <div className="Rating">
                    <h1>Ratings for the movie</h1>
                    <div className="SubRating">
                        {data.Ratings?.map(rate => (
                            <div key={rate.Source}>
                                <p>{rate.Source}</p>
                                <p>{rate.Value}</p>
                            </div>
                            // <p>{rate.Value}</p>
                        ))}
                    </div>
                </div>
        </div>
    )
}
