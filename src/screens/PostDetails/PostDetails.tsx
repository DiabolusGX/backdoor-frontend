import Navbar from '../../components/Navbars/Navbar';
import { toast, Flip } from 'react-toastify';
import { fetchPost } from '../../api/index';
import { IPost } from '../../api/modelsInterface';
import { motion } from 'framer-motion'
import { routeVariants } from '../../variants/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FullPostCard from '../../components/Cards/FullPostCard/FullPostCard';

interface RouteParams {
    postId: string;
}

const PostDetails: React.FC = props => {
    const [post, setPost] = useState<IPost>();
    const params = useParams<RouteParams>();
    const postId = params.postId;

    useEffect(() => {
        fetchPost(postId)
            .then(res => {
                setPost(res.data)
                console.log(res.data);
            })
            .catch(err => toast.error(err.response.data.message, { transition: Flip }));
    }, [postId]);

    return (
        <motion.section
            variants={routeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Navbar />
            <div className="flex flex-col flex-1 items-center m-2 md:m-4 
            xl:my-2 xl:mx-8">
                {post && (
                    <FullPostCard
                        id={post._id}
                        title={post.title}
                        body={post.body}
                        votes={post.votes}
                        downVotes={post.downVotes}
                    />
                )}
            </div>
        </motion.section>
    );
}

export default PostDetails;