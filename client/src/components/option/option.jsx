import React, { useState} from 'react';
// import { toggleOptionDropdownOpen } from '../../redux/modals/modal-actions';
import './option.scss';
// import {connect} from 'react-redux';


const Option = (props) => {
    // const [open, setOpen] = useState(false);      
    
    return (         
             <span className={`${props.icon ? 'option-icon-present': ''} option `} 
              id={`${props.text === 'Donate'? 'donate-button' : null }`}
             >

                {props.icon? <span 
                // onClick={ ()=> props.toggleOptionDropdownOpen()}
                >{props.text} </span>
                            :<span>{props.text} </span>
                }  
               
                <span className='option-icon' 
                    // onClick={ ()=> props.toggleOptionDropdownOpen()}
                    >{props.icon}
                </span>  

                {/* { props.isOptionOpen && props.children }  */}
                {/* The above code means if open is true, render props.children       */}
              
              </span>
        
     );
}

 export default Option; 

// const mapDispatchToProps = (dispatch) => ({
//   toggleOptionDropdownOpen: () => dispatch(toggleOptionDropdownOpen),
// });

// const mapStateToProps = ({navtoggle}) => ({
//   isOptionOpen : navtoggle.optionDropdownIsOpen 
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Option); 