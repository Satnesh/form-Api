
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState,useEffect} from 'react';
const url="https://course-api.com/react-tours-project"

function App() {
  const[update,setUpdate]=useState({
    email:"",
    password:"",
    select:"",
    text:""
  })

  const[record,setRecord]=useState([]);
  const[tours,setTours]=useState([])

const handleclick=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setUpdate({...update,[name]:value})

   
}


const submit=(e)=>{
    e.preventDefault();
    const data={...update}
    console.log(data)
    setRecord([data]);
    setUpdate({email:"",
          password:"",
         select:"",
          text:""
        })
    


}


const Tours=async()=>{
  const response=await fetch(url);
  const tour=await response.json()
  console.log(tour)
  setTours(tour)
}

useEffect(()=>{
    Tours()
},[]);

  return (
    <div className="App">
     <Form onSubmit={submit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" 
        value={update.email}
        onChange={handleclick}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword"
         value={update.password}
         onChange={handleclick}
        placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect"
         value={update.select}
         onChange={handleclick}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" 
         value={update.text}
         onChange={handleclick}
        />
      </FormGroup>

      <Button color="success">Submit</Button>
      </Form>

      <div>
        {record.map((image,id)=>{
          const{email,password,select,text}=image;
          return(
            <div key={id}>
              <p>Email is:{email}</p>
              <p>Password is:{password}</p>
              <p>Select is:{select}</p>
              <p>Text is:{text}</p>
              </div>
          )
        })}
      </div>
      <div>
      {
        tours.map((pro)=>{
          const{image,name,info,price}=pro;
          return(
            <div >
              <section>
            <img src={image}></img>
             <h4>${price}</h4>
            <h4>{name}</h4>
            <p>{info}</p>
            

            </section>
              </div>
          )
        })
      }
      </div>


    </div>
  );
}

export default App;
