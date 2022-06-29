import React from 'react'

function ImgDialog({show,description,cancel,confirm,data,title}) {

    if(!show){
        // console.log(image,title,'imgsaaaap')
        return <>
        </>
    }
    console.log(data,'imgsaaaa')
  return (
    <div>
        <div className="overlay">
         
         <div className="dialog dialog2">
           <h6 onClick={cancel}>  x</h6>
           <div className="dialog__content2">
            
             
            
           <img src={data}/>
            </div>
              {/* <hr /> */}
                {/* <div className="dialog__footer">
                    <button className="dialog__cancel" onClick={cancel}>close</button>
                    <button className="dialog__confirm" onClick={confirm}>ok</button> 
                </div> */}
            </div> 
          </div>
    </div>
  )
}

export default ImgDialog