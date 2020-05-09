import React, {
    Component
} from 'react'
import DatePicker from 'react-datepicker';
import axios from 'axios'

import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercises extends Component {
    constructor(props) {
        super(props)
          this.onChangeUsername=this.onChangeUsername.bind(this)
          this.onChangeDescription=this.onChangeDescription.bind(this)
          this.onChangeDuration=this.onChangeDuration.bind(this)
          this.onChangeDate=this.onChangeDate.bind(this)
          this.onSubmit=this.onSubmit.bind(this)
        
        this.state={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then(
            res=>{
                if(res.data.length>0){
                    this.setState({
                    users:res.data.map(ele=>ele.username)
                    ,username:res.data[0].username

                    })

                }
            }

            //this.setState({users:,username:'ddddd'}
            )
        
      
    }
  


    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onChangeDuration(e){
        this.setState({
            duration:e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
            date:date.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        console.log(exercise)
        axios.post('http://localhost:5000/exercise/add',exercise)
        .then((res)=>{console.log(res)})

        window.location='/';
    }
    
    

    
    render() {
        return (
            <div>
            <h3>Create new exercise Log</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <label>username:</label>
            <select ref="userInput" 
            required 
            className="form-control"
            value={this.state.username}
            onChange={this.onChangeUsername}
            >
            {this.state.users.map((user)=>{
                return<option
                key={user}
                value={user}>{user}
                </option>

            })}
            </select>
            </div>
            <div className="form-group">
            <label>Description</label>
            <div>
            <input typr="text"
            className="form-control" 
            value={this.state.description}
            onChange={this.onChangeDescription}/>

            
            </div> 

            </div>
            <div className="form-group">
            <label>duration</label>
            <div>
            <input typr="text"
            className="form-control" 
            value={this.state.duration}
            onChange={this.onChangeDuration}/>

            
            </div> 

            </div>
          
            <div className="form-group">
            <label>Date :</label>
            <div>
            <DatePicker selected={this.state.date} onChange={this.onChangeDate}
            />
            </div> 

            </div>
            <div className="form-group">
            <label>submit</label>
             <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
             

            </div>



            
            
            </form>
            
            
            
            
            
            
            
            </div>

        )
    }


}