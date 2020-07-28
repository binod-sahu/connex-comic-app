import React, {useState} from 'react';
import styles from '../style/myStyle.module.css'; 

const ComicSearch = (props) => {
    const [comicNo, setComic] = useState("");
    const [errors, setErrors] = useState({});
    
    const clickevent = () =>  {
        if(errors.message) {
            return false;
        } 
        setErrors(validate(comicNo));
        if (+comicNo !== 0 && !errors.message) {
            const url = `https://xkcd.com/${comicNo}/`
            window.open(url, '_new','toolbar=0,location=0,menubar=0');
        }
      }

    const validate = (values) => {
        let errors = {};
        if (!values){
            errors.message = 'Please Enter a Comic Number'
        } 
        if (values && +values <= 0){
            errors.message = 'Please Enter a Comic Number greater than 0'
        }
        return errors;
    };

    const changeInput = (e) =>{
        delete errors.message
        validate(e.target.value)
        setComic(e.target.value)
    }
    

    return ( 
        <div className={styles.inputContainer}>
            <input 
                type="number" 
                value={comicNo}
                onChange={e => changeInput(e)}
            ></input>
            <button onClick={() => clickevent()}>Browse Comic</button>
            {errors.message && (
                <p className={styles.isDanger}>{errors.message}</p>
            )}
        </div>
     );
}

export default ComicSearch;