import { useState, useEffect } from 'react';
import { supabase } from '../client'; 


const NewCreatemate = () => {

    const[post, setPost] = useState({Name: "", Speed:"", Color:""});

    const handleChange = event => {
        const { name, value } = event.target;
        setPost(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const { data, error } = await supabase
            .from('Posts')
            .insert([post]);

        if (error) {
            console.error("Error inserting data: ", error);
        } else {
            console.log("Data inserted successfully: ", data);
            window.location = "/Gallery"; // Redirect on success
        }
    };


    return(
        <>
        <h1>Create a New Crewmate</h1>
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Create Crewmate</button> 
        </form>
        </>
    )
}
export default NewCreatemate;