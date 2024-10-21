const Contry = ({item}) => {
    console.log(item)
    const {name , flags} = item
  return (
    <div className="border-2 border-blue-600 w-11/12 mx-auto p-5 mt-5 rounded-xl shadow-lg" >
        <h3>Name: {name?.common} </h3>
        <img className="mt-2" src={flags.png} alt="" />
      
    </div>
  )
}

export default Contry
