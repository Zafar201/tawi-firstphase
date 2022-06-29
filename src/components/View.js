import React, {useEffect, useState} from 'react'
import Dialog from './Dialog'
import HotDeals from './HotDeals'

function View() {
    const [showTask, setShowTask] = useState(false)
    const [showHot, setShowHot] = useState(false)
    const [showTaskUser, setShowTaskUser] = useState(false)
    const [show, setShow] = useState(false)

    const close=()=>{
      setShowHot(false)
    }

    const cancel=()=>{
        // console.log('cancel')
        setShowTask(false)
    }
    const confirm=()=>{
        // console.log('confirm')
        setShowTask(false)
    }
    const cancelUser=()=>{
        // console.log('cancel')
        setShowTaskUser(false)
    }
    const confirmUser=()=>{
        // console.log('confirm')
        setShowTaskUser(false)
    }
    useEffect(()=>{
      
      const timeout = setTimeout(() => {
        setShowHot(true)
      }, 2000)
      return () => clearTimeout(timeout)    
    },[setShowHot])
    
  return (
 
    <div>

<div className="mt-10 text-center">
    <button onClick={()=>setShowTask(true)} className="btn">Delete Task</button>
    <button onClick={()=>setShowTaskUser(true)} className="btn">Delete User</button>
  </div>

      <Dialog show={showTask}
      cancel={cancel}
      confirm={confirm}
      title="delete user"
      description='are you sure you want to delete'/>

       <Dialog show={showTaskUser}
      cancel={cancelUser}
      confirm={confirmUser}
      title="delete usersssss"
      description='are you sure you want to deletesssss'/>
    
    <HotDeals
    show={showHot}
    close={close}/>
      
    </div>
  )
}

export default View