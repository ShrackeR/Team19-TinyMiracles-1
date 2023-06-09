import './Wrrapper.css';
const Wrapper =(props)=>{
 
    return <>
    <div className="App">
      
    

      
      <div className={"auth-wrapper"}>
          <div className="auth-inner">
            {props.children}
          </div>
        </div>
      
      
        
      
    </div>
    </>
}
export default Wrapper;