import './Wrrapper.css';
const Wrapper =(props)=>{
 
    return <>
    <div className="App">
      
    

      
          <div className="auth-inner">
            {props.children}
          </div>
      
      
        
      
    </div>
    </>
}
export default Wrapper;