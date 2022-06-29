import React from 'react'

function Dialog({show,title,datas,cancel,confirm}) {

    if(!show){
        return <>
        </>
    }
    console.log(datas.f_name)
  return (
    <div>
        <div className="overlay">
          {/* <img src='../assets/image/2.jpeg'/> */}
         <div className="dialog">
           <div className="dialog__content">
             <h2 className="dialog__title">User Information</h2>
             <p className="dialog__description">
               Name: <span>{datas.f_name} </span>
             </p>
             <p className="dialog__description">
             Mobile: <span> {datas.phone}  </span> 
             </p>
             <p className="dialog__description">
              Email: <span> {datas.email}  </span> 
             </p>
             <p className="dialog__description">
               Address:<span> {datas.address}  </span>
             </p>
            </div>
              <hr />
                <div className="dialog__footer">
                   <button className="dialog__cancel" onClick={cancel}>close</button>
                   {/* <button className="dialog__confirm" onClick={confirm}>ok</button> */}
                </div>
            </div> 
          </div>
    </div>
  )
}

export default Dialog