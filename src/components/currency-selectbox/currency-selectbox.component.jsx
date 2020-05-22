

import React, {useState} from 'react';
import '../language-nav-selectbox/navbar-selectbox.styles.scss'
 
const CurrencySelectbox = () => {
    const [selectItem, setSelectItem] = useState(['USD','EURO','AZN'])
    return (
        <select className="selectbox" > 
          {
              selectItem.map(currency=>{
               return <option key={currency} value={currency}>{currency}</option>
              })
          }
        
         </select>
    )

}
export default CurrencySelectbox;