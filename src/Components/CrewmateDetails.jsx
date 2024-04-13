import { useState, useEffect } from 'react';
import { supabase } from '../client'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CrewmateDetails = ({data}) => {
    const {id} = useParams();
    console.log(id);
    const[post, setPost] = useState({id: null, Name: "", Speed:"", Color:""});

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error);
            } else {
                setPost(data);
            }
        };

        fetchPost();
    }, [id]);

    return(
        <>
        <h1>Crewmate: {post.Name}</h1>
        <h1>Stats:</h1>
        <h2>Speed: {post.Speed}</h2>
        <h2>Color: {post.Color}</h2>
        <Link to={`/Gallery/EditCrewmate/${id}`}>
        <button>Wanna edit this Crewmate?</button>
        </Link>
        </>
    )
    }
export default CrewmateDetails;
