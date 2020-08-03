import React from 'react';

const TopHeadLines = (props) => {

    return (
        <div class="row">
            {
                props.value.map(values => {
                    return (


                        <div class="col-6 col-md-3">

                            <div class="card-deck" style={{ height: "350px", width: "350px", display: "inline-block" }}>
                                <a href={values.url} style={{ color: "#000000", textDecoration: "none" }}>
                                    <div class="card">
                                        <img class="card-img-top" src={values.urlToImage} alt="Card image cap" />
                                        <div class="card-body" style={{ textAlign: "left" }}>

                                            <h6 class="card-title"> {values.title}</h6>
                                            {/* <p class="card-text"> {values.description.substring(0, 80) + " "}<p style={{ display: "inline-block", color: "blue", textDecoration: "underline" }}>read more...</p></p> */}
                                            <p class="card-text"><small class="text-muted">{values.publishedAt}|{values.source.name}</small></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    )
                })


            }
        </div>
    )
}

export default TopHeadLines;