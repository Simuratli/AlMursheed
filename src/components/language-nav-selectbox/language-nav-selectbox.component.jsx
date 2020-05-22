

import React, {useState} from 'react';
import './navbar-selectbox.styles.scss'
 
const LangSelectbox = () => {
    const [selectItem, setSelectItem] = useState(['Azerbaijan','Turkey','German'])
    return (
        <select className="selectbox" > 
          {
              selectItem.map(lang=>{
               return <option key={lang} value={lang}>{lang}</option>
              })
          }
        
         </select>
    )

}
export default LangSelectbox;