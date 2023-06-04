
import classes from './HomeMain.module.css';
const HomeMain = () => {
    return (
< >
      <div className='w-100 h-75'>
      <h1>This is Home</h1>
    <div className={classes['landing-page']}>
      <div className={classes['background-image']}></div>
      <div className={classes.content}>
        <h1>About Us</h1>
        <p>Add your description here...</p>
      </div>
    </div>
      </div>
       
   

      

     


      </>
        );
}
 
export default HomeMain;