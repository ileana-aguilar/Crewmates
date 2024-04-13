import { useState, useEffect } from 'react';
import { supabase } from '../client'; 
import { useParams } from 'react-router-dom';


const UpdateCrewmate = ({data}) => {

    const {id} = useParams();
    console.log(id);
    const [currentCrewmate, setCurrentCrewmate] = useState({ Name: "", Speed: "", Color: "" });
    const[post, setPost] = useState({id: null, Name: "", Speed:"", Color:""});

    const fetchCrewmate = async () => {
        const { data, error } = await supabase
            .from('Posts')
            .select()
            .eq('id', id)
            .single();

        if (error) console.error('Error fetching post:', error);
        else {
            setPost(data);
            setCurrentCrewmate(data); // Set the current crewmate info for summary display
        }
    };
    useEffect(() => {
        fetchCrewmate();
    }, [id]);
/*
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
    }, [id]);*/

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
/*
    const updateSubmit = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            update({ Name: post.Name, Speed: post.Speed,  Color: post.Color})
            .eq('id', id);
            window.location = "/Gallery"; // Redirect on success
        };*/

        async function updateSubmit(event) {
            event.preventDefault(); // Prevent default form submission behavior
        
            // Assuming `id` is the ID of the crewmate to update
            const { data, error } = await supabase
                .from('Posts')
                .update({
                    Name: post.Name,   // These should be your state variables holding current form values
                    Speed: post.Speed,
                    Color: post.Color
                })
                .match({ id: id });  // Make sure `id` is correctly sourced from your component's state or props
        
            if (error) {
                console.error('Error updating post:', error);
            } else {
                console.log('Post updated:', data);
                window.location = "/Gallery"; // Redirect after successful update
            }
        }

    const deleteCrewmate = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .delete()
          .eq('id', id); 
      
        window.location = "/Gallery";
      };


    return (
        <>
        <h1>Update Your Crewmate</h1>
        <div>
            <h3>Current Crewmate info:</h3>
            <p>Name: {currentCrewmate.Name}, Speed: {currentCrewmate.Speed} , Color: {currentCrewmate.Color}</p>
        </div>

        <form onSubmit={updateSubmit}>
            <div>
                <h2>Name:</h2>
                <input type='text' 
                    name="Name"
                    value={post.Name} 
                    onChange={handleChange} 
                    id="Name" 
                    placeholder="Enter crewmate's name"
                />
            </div>
            <div>
                <h2>Speed (mph):</h2>
                <input type='text' 
                    name="Speed"
                    value={post.Speed}
                    onChange={handleChange}
                    id="Speed" 
                    placeholder="Enter speed in mph"
                />
            </div>
            <div>
                <h2>Color:</h2>
                <input type='radio' id="Red" name='Color' value='Red' checked={post.Color === 'Red'} onChange={handleChange}/>
                    <label htmlFor='Red'>Red</label>
                    <input type='radio' id="Green" name='Color' value='Green' checked={post.Color === 'Green'} onChange={handleChange}/>
                    <label htmlFor='Green'>Green</label>
                    <input type='radio' id="Blue" name='Color' value='Blue' checked={post.Color === 'Blue'} onChange={handleChange}/>
                    <label htmlFor='Blue'>Blue</label>
                    <input type='radio' id="Purple" name='Color' value='Purple' checked={post.Color === 'Purple'} onChange={handleChange}/>
                    <label htmlFor='Purple'>Purple</label>
                    <input type='radio' id="Yellow" name='Color' value='Yellow' checked={post.Color === 'Yellow'} onChange={handleChange}/>
                    <label htmlFor='Yellow'>Yellow</label>
                    <input type='radio' id="Orange" name='Color' value='Orange' checked={post.Color === 'Orange'} onChange={handleChange}/>
                    <label htmlFor='Orange'>Orange</label>
                    <input type='radio' id="Pink" name='Color' value='Pink' checked={post.Color === 'Pink'} onChange={handleChange}/>
                    <label htmlFor='Pink'>Pink</label>
                    <input type='radio' id="Rainbow" name='Color' value='Rainbow' checked={post.Color === 'Rainbow'} onChange={handleChange}/>
                    <label htmlFor='Rainbow'>Rainbow</label>
            </div>
            <button type="submit" onClick={updateSubmit}>Update Crewmate</button> 
            <button className='deleteButton' onClick={deleteCrewmate}>Delete Crewmate</button>
        </form>
        </>
    )
    } 
export default UpdateCrewmate;