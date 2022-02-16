import {useEffect} from 'react'
import {useState} from 'react'
import {useParams} from 'react-router'


const MovieDetails=()=>{
    const [details, setDetails]= useState(null)
    const [comments, setComments]=useState([])

    const params=useParams() //params give an object that contain a property called like your parameter name(params.elementId)
    console.log(params)
    useEffect(()=>{
        const fetchDetails=async ()=>{
            try{
                let response=await fetch("http://www.omdbapi.com/?apikey=a0d093ea&"+params.movieID)
                if (response.ok){
                    let data=await response.json()
                    console.log(data)
                    setDetails(data)
                    console.log(details)
                }else{
                    console.log('error')
                }
            } catch (error){
                console.log(error)
            }
        };
        const fetchComments=async()=>{
            try{
                let response=await fetch("https://striveschool-api.herokuapp.com/api/comments/"+params.movieID,
                 {headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDUwMTgwODAsImV4cCI6MTY0NjIyNzY4MH0.KiDhTW4_0l4zlKsHO5a7IzMozOdUC_FIJvB9k6_VrKQ"
                            }
                    }
                );
                if(response.ok){
                    let data=await response.json()
                    setComments(data)
                }else{
                    console.log('error')
                }
            } catch (error){
                console.log(error)
            }
        }
        fetchDetails();
        fetchComments();
    }, [params.movieID])


    return(
        <div className='text-center text-white'>
            {details &&(
                <>
                    <h2>
                        {details.title}
                    </h2>
                    <img src={details.Poster} alt ='poster film'/>
                    <ul style={{ listStyleType: "none" }}>
                        {comments.map((c) => (
                        <li className="my-3" key={c._id}>
                            {c.comment}
                        </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default MovieDetails