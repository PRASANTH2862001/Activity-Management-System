function Listactivity(props) {
    return (
      <>
      <div className="p-4 text-center flex-grow " style={{ backgroundColor: props.color }}>
                        <h1 className="text-2xl font-medium">{props.title}</h1>
                        <p className="text-sm font-medium">{props.subtitle}</p>
                    </div>
      
      
      </>
    )
}
export default Listactivity