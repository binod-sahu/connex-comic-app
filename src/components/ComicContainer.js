import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { fatchComic } from '../redux'
import styles from '../style/myStyle.module.css'; 

const ComicContainer = ({comicData, fatchComic}) => {
    
    useEffect(() => {
        fatchComic()
    }, [])

    const openComic = (id) =>  {
        const url = `https://xkcd.com/${id}/`
        window.open(url, '_new','toolbar=0,location=0,menubar=0');
    }

    return comicData.isLoading ? (<div className={styles.loader}></div>)
        : comicData.error ? (<h1> {comicData.error}</h1>)
        :(<div className={styles.card}>
            <div className={styles.title}>Current Comic Details</div>
            <img 
                src={comicData.data.img} 
                alt={comicData.data.alt} 
                title={comicData.data.alt}
                onClick={openComic.bind(this, comicData.data.num)}/>
            <div className={styles.container}>
                <h4><b>{comicData.data.title}</b></h4> 
            </div>
            
        </div>
     );
}


const mapStateToProps = state => {
    return {
        comicData: state.comic
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fatchComic: () => dispatch(fatchComic())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ComicContainer);