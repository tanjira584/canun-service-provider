import React, { useEffect, useState } from "react";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import "./Blogs.css";

const Blogs = () => {
    const d = new Date();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    console.log(posts);
    return (
        <div className="blog-page" style={{ backgroundColor: "#f7f7f7" }}>
            <Header></Header>
            <Breadcrumb pageName="Blogs"></Breadcrumb>
            <div className="posts-area container-md container-fluid py-5">
                {posts.map((post) => (
                    <div className="single-post mb-4 border " key={post.id}>
                        <div className="post-img">
                            <img
                                className="img-fluid w-100"
                                style={{ height: "500px" }}
                                src={post.img}
                                alt=""
                            />
                        </div>
                        <div className="post-body p-5">
                            <div className="post-info mb-3">
                                <span>By: {post.author}</span>
                                <span>Comments: ({post.comment})</span>
                                <span>{d.toDateString()}</span>
                            </div>
                            <div className="post-title">
                                <h4 className="mb-3">{post.title}</h4>
                                <p className="m-0">{post.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
