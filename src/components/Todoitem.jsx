function Todoitem(props) {
      const act =props.act
      const setact1=props.setact
    const deletes=(deleteid)=>{
        var dec= act.filter((item)=>{
            console.log(item.id);
            console.log(deleteid);
            
            
            if((item.id)==deleteid){
                return false
            }
            else{
                return true
            }
        })
        console.log("delete");
        

        setact1(dec)
    }
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item.action}</p>
            <button onClick={()=>{deletes(props.id1)}} className="text-red-700">delete</button> 
        </div>

    )
}

export default Todoitem