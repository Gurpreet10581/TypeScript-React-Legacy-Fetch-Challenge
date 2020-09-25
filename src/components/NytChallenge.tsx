import React from 'react';
import NytChallengeIndex from './NytChallengeIndex';

type NytState ={
   search?: string,
   startDate?: string,
   endDate?: string,
   result: any,
   pageNumber: number,
   
};

class NytChallenge extends React.Component <{},NytState>{

    constructor (props: {}){
        super(props);
        this.state = {
            search: '',
            startDate:'',
            endDate: '',
            result: [],
            pageNumber:0,

        };
    }

    fetchResults= () =>{

        const baseURL:string = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
        const nytKey = "iUMyE5HDOtgIXwHDpj1WLx6EpI9AzuXU"; 
    
        let url: string = `${baseURL}?api-key=${nytKey}&page=${this.state.pageNumber}&q=${this.state.search}`;
        console.log('URL:', url);
      
        if (this.state.startDate) {
          console.log(this.state.startDate)
          url += '&begin_date=' + this.state.startDate;
          console.log(url);
        }
        
        if (this.state.endDate !== '') {
          console.log(this.state.endDate)
          url += '&end_date=' + this.state.endDate;
          console.log(url);
        }
    
        fetch(url)
        .then(res=> res.json()) 
        .then(json =>{this.setState({
                result: json.response.docs
            })
            console.log(json)
        })
        .catch(err => console.log(err));
    }

    changePageNumber = (event:{}, direction:string) => {
        if(direction === 'down') {
          if(this.state.pageNumber > 0) {
            this.setState({pageNumber: this.state.pageNumber + 1});
              this.fetchResults();
            }
          }
     
      if(direction === 'up') {
        this.setState({pageNumber:this.state.pageNumber + 1});
        this.fetchResults();
        }
      };
     

    handleSubmit = (event:{}) => {
        //need to add prevent default but getting an error because  of the type
        this.setState({pageNumber:0});
        this.fetchResults();
      };

    componentWillMount(){
        this.fetchResults();
    }

    render(){

        return(
            <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <span>Enter a single search term:</span>
                    <input type="text" name="search" onChange={(e) => this.setState({ search: e.target.value})} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => this.setState({startDate:e.target.value})} />
                    <br />
                    <span>Enter an end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => this.setState({endDate:e.target.value})} />
                    <br />
                    <button className="submit">Submit search</button>
                </form> 
                  {
                    this.state.result.length > 0 ? <NytChallengeIndex result={ this.state.result } pageNumber={ this.state.pageNumber } /> : null 
                  }
            </div>
        </div>
        )
    }
}

export default NytChallenge;