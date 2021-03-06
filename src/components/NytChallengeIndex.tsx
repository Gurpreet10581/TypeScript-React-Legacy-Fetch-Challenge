import React, {FunctionComponent} from 'react';

type acceptedProps = {
    result: [],
    pageNumber: any,
}

const NytChallengeIndex: FunctionComponent <(acceptedProps)> = props =>{

    return(
        <div>
            <div>
                <div>
                    <button onClick={(e) =>  props.pageNumber(e, 'down')}>Previous 10</button>
                    <button onClick={(e) => props.pageNumber(e, 'up')}>Next 10</button>
                </div>
                { props.result.map((result:any) => {
                return (
                    <div key={result._id}>
                    <h2>{result.headline.main}</h2>
                    {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                    <p>
                    {result.snippet}
                    <br />
                    {result.keywords.length > 0 ? ' Keywords: ' : ''}
                    </p>
                    <ul>
                    {result.keywords.map((keyword:any) => <li key={keyword.value}>{keyword.value}</li>)}
                    </ul>
                    <a href={result.web_url}><button>Read It</button></a>
                </div>
                )
                })}
                <div>
                    <button onClick={(e) =>  props.pageNumber(e, 'down')}>Previous 10</button>
                    <button onClick={(e) => props.pageNumber(e, 'up')}>Next 10</button>
                </div>
            </div>
        </div>
    )
}

export default NytChallengeIndex;