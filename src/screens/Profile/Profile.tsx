import PageBody from '../../components/Utilities/PageBody';
import Navbar from '../../components/Navbars/Navbar';
import PostCard from '../../components/Cards/PostCard/PostCard';
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard';
import { getUser, fetchPostsBySearch, } from '../../api/index';
import { IPost, IUser } from '../../api/modelsInterface';
import { toast, Flip } from 'react-toastify';
import { motion } from 'framer-motion';
import { routeVariants } from '../../variants/index';

import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Heading from '../../components/Utilities/Heading';

const Profile: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    const [userInfo, setUserInfo] = useState<IUser>();
    const [userPosts, setUserPosts] = useState<Array<IPost>>([]);
    const history = useHistory();

    useEffect(() => {
        getUser(username)
            .then(fetchedUser => {
                // get user's posts
                fetchPostsBySearch('', '', fetchedUser.data._id)
                    .then(fetchedPost => setUserPosts(fetchedPost.data))
                    .catch(err => toast.error(err.response.data.message, { transition: Flip }));
                // set user info
                setUserInfo(fetchedUser.data);
            })
            .catch(err => {
                toast.error(err.response.data.message, { transition: Flip })
                history.goBack();
            });
    }, [username]);

    return (
        <motion.section
            variants={routeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Navbar />
            <PageBody>

                {/* Content Column */}
                <div className="flex flex-1 flex-col items-center flex-wrap pt-8 pb-20 mx-2 box-border">

                    <ProfileCard
                        username={userInfo?.username}
                        bio={userInfo?.bio}
                        score={userInfo?.score}
                        permissionLevel={userInfo?.permissionLevel}
                        numberOfPosts={userInfo?.posts.length}
                        numberOfComments={userInfo?.comments.length}
                        joinedAt={userInfo?.joinedAt.toString()}
                    />

                    <p className="text-4xl text-white mt-10">
                        {userInfo?.username}'s Posts:
                    </p>
                    <hr className="mb-4 mt-2 w-3/12 border-syntax-orange border-2 rounded-full" />

                    {userPosts?.map(post => {
                        const postBody = (post.body.length > 250)
                            ? post.body.substring(0, 250) + "..."
                            : post.body;
                        return (
                            <PostCard
                                id={post._id}
                                title={post.title}
                                body={postBody}
                                votes={post.votes}
                                downVotes={post.downVotes}
                                key={post._id}
                            />
                        )
                    })}

                    {!userPosts.length ? (
                        <Heading>This user currently has no posts.</Heading>
                    ) : null}
                </div>
            </PageBody>
        </motion.section>
    );
};

export default Profile;
