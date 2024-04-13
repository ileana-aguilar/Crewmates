import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from '../client'
import Card from './Card';

const Gallery = (props) => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', { ascending: true })

            // set state of posts
            setPosts(data);
            console.log(data);
          }
          fetchPosts();
    }, [props]);

/*
    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select('*') // Make sure this selects all fields or specify the fields
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Error:', error);
            } else {
                setPosts(data);
                console.log(data);
            }
        };
    
        fetchPosts();
        
    }, []);
    */
    
    return(
        <>
        <h1>Your Crewmate Gallery!</h1>
        <div>
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card key={post.id} id={post.id} name={post.Name} speed={post.Speed.toString()} color={post.Color} />
                ) 
                : 
                (
                    <div>
                        <h2>You haven't made a crewmate yet!</h2>
                        <Link to="/NewCreatemate">
                            <button>Create one here!</button>
                        </Link>
                    </div>
                )
            }


            
        </div>
        <div>

        </div>
        </>
    )
}
export default Gallery;